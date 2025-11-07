// Cloudflare Function for Stripe Checkout Session
import Stripe from 'stripe';

const PACKAGES = {
    starter: { results: 50, price: 2900 },
    pro: { results: 100, price: 4900 },
    business: { results: 500, price: 14900 }
};

export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const stripe = new Stripe(env.STRIPE_SECRET_KEY);

        const body = await request.json();
        const { searchQuery, email, package: packageName } = body;

        const pkg = PACKAGES[packageName];
        if (!pkg) {
            return new Response(JSON.stringify({ error: 'Invalid package' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Google Maps Scraper - ${packageName.charAt(0).toUpperCase() + packageName.slice(1)}`,
                        description: `Extract ${pkg.results} businesses from Google Maps`,
                    },
                    unit_amount: pkg.price,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${new URL(request.url).origin}/success.html`,
            cancel_url: `${new URL(request.url).origin}/cancel.html`,
            customer_email: email,
            metadata: {
                searchQuery,
                email,
                maxResults: pkg.results.toString(),
                package: packageName
            }
        });

        return new Response(JSON.stringify({
            sessionId: session.id,
            url: session.url
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Stripe error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
