// Cloudflare Function for Stripe Webhook
import Stripe from 'stripe';

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const stripe = new Stripe(env.STRIPE_SECRET_KEY);
        const sig = request.headers.get('stripe-signature');
        const body = await request.text();

        let event;
        try {
            event = stripe.webhooks.constructEvent(body, sig, env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return new Response(`Webhook Error: ${err.message}`, { status: 400 });
        }

        // Handle checkout.session.completed
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const { searchQuery, email, maxResults } = session.metadata;

            // Start Apify scraping job
            await startScrapingJob(env, searchQuery, email, parseInt(maxResults));
        }

        return new Response(JSON.stringify({ received: true }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Webhook error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

async function startScrapingJob(env, searchQuery, email, maxResults) {
    try {
        // Start Apify Actor
        const response = await fetch(
            `https://api.apify.com/v2/acts/${env.APIFY_ACTOR_ID}/runs`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${env.APIFY_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    search_query: searchQuery,
                    max_results: maxResults,
                    language: 'en'
                })
            }
        );

        const data = await response.json();
        const runId = data.data.id;

        console.log(`Started scraping job: ${runId} for ${email}`);

        // Send confirmation email
        await sendConfirmationEmail(env, email, searchQuery, maxResults, runId);

        // Poll for completion (in production, use Apify webhooks instead)
        // For now, we'll use a simpler approach
        await pollForCompletion(env, runId, email, searchQuery);

        return runId;
    } catch (error) {
        console.error('Apify API error:', error);
        throw error;
    }
}

async function sendConfirmationEmail(env, email, searchQuery, maxResults, runId) {
    // Send email using Cloudflare Email Workers or external service
    const emailData = {
        to: email,
        from: env.EMAIL_USER,
        subject: 'Your Google Maps Scraping Job Has Started',
        html: `
            <h2>Scraping Job Started!</h2>
            <p>Your Google Maps scraping job has been started successfully.</p>
            <p><strong>Search Query:</strong> ${searchQuery}</p>
            <p><strong>Max Results:</strong> ${maxResults}</p>
            <p><strong>Job ID:</strong> ${runId}</p>
            <p>You'll receive the results within 5-10 minutes.</p>
            <p>Thank you for using TechConcepts!</p>
        `
    };

    // Use Mailgun, SendGrid, or Resend API here
    // For now, log it
    console.log('Email would be sent:', emailData);
}

async function pollForCompletion(env, runId, email, searchQuery) {
    // In production, use Apify webhooks instead of polling
    // This is simplified for initial deployment
    console.log(`Job ${runId} started for ${email}, results will be sent when complete`);
}
