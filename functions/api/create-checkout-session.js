// Cloudflare Function for Stripe Checkout Session
const PACKAGES = {
    starter: { results: 50, price: 2900 },
    pro: { results: 100, price: 4900 },
    business: { results: 500, price: 14900 }
};

export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const body = await request.json();
        const { searchQuery, email, package: packageName } = body;

        const pkg = PACKAGES[packageName];
        if (!pkg) {
            return new Response(JSON.stringify({ error: 'Invalid package' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create Stripe checkout session using fetch API
        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'payment_method_types[0]': 'card',
                'line_items[0][price_data][currency]': 'usd',
                'line_items[0][price_data][product_data][name]': `Google Maps Scraper - ${packageName.charAt(0).toUpperCase() + packageName.slice(1)}`,
                'line_items[0][price_data][product_data][description]': `Extract ${pkg.results} businesses from Google Maps`,
                'line_items[0][price_data][unit_amount]': pkg.price.toString(),
                'line_items[0][quantity]': '1',
                'mode': 'payment',
                'success_url': `${new URL(request.url).origin}/scraper/success.html`,
                'cancel_url': `${new URL(request.url).origin}/scraper/cancel.html`,
                'customer_email': email,
                'metadata[searchQuery]': searchQuery,
                'metadata[email]': email,
                'metadata[maxResults]': pkg.results.toString(),
                'metadata[package]': packageName
            })
        });

        const session = await stripeResponse.json();

        if (!stripeResponse.ok) {
            throw new Error(session.error?.message || 'Stripe API error');
        }

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
