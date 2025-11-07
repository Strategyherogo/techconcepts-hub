#!/bin/bash

# Update Stripe webhook URL after DNS is fixed
# Run this AFTER DNS propagates (2-5 minutes after running fix-dns.sh)

echo "=== Update Stripe Webhook URL ==="
echo

STRIPE_KEY="${STRIPE_SECRET_KEY:-}"

if [ -z "$STRIPE_KEY" ]; then
    echo "Error: STRIPE_SECRET_KEY environment variable not set"
    echo "Run: export STRIPE_SECRET_KEY='your-key-here'"
    exit 1
fi
NEW_URL="https://techconcepts.org/api/webhook"

echo "Step 1: Finding webhook endpoints..."
WEBHOOKS=$(curl -s https://api.stripe.com/v1/webhook_endpoints \
    -u "$STRIPE_KEY:" \
    -G)

# Extract webhook IDs that contain .pages.dev URL
WEBHOOK_ID=$(echo "$WEBHOOKS" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$WEBHOOK_ID" ]; then
    echo "No webhook found. Creating new one..."

    curl -s https://api.stripe.com/v1/webhook_endpoints \
        -u "$STRIPE_KEY:" \
        -d "url=$NEW_URL" \
        -d "enabled_events[]=checkout.session.completed"

    echo
    echo "✅ Webhook created!"
else
    echo "Found webhook: $WEBHOOK_ID"
    echo "Updating URL to: $NEW_URL"

    curl -s https://api.stripe.com/v1/webhook_endpoints/$WEBHOOK_ID \
        -u "$STRIPE_KEY:" \
        -d "url=$NEW_URL"

    echo
    echo "✅ Webhook updated!"
fi

echo
echo "Stripe is now configured for: $NEW_URL"
echo
echo "🎉 Your scraper is fully live at: https://techconcepts.org/scraper/"
