#!/bin/bash

# Fix DNS for techconcepts.org to point to Cloudflare Pages
# Run this script once you have a Cloudflare API token

echo "=== Cloudflare DNS Fix Script ==="
echo

# Check if API token is provided
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "Error: CLOUDFLARE_API_TOKEN not set"
    echo
    echo "Get your API token from:"
    echo "https://dash.cloudflare.com/profile/api-tokens"
    echo
    echo "Then run:"
    echo "export CLOUDFLARE_API_TOKEN='your-token-here'"
    echo "./fix-dns.sh"
    exit 1
fi

DOMAIN="techconcepts.org"
ZONE_ID="466a394ccfc94a086203e86572b72248"
TARGET="techconcepts-org.pages.dev"

echo "Step 1: Getting current DNS records..."
RECORDS=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records?name=$DOMAIN&type=A" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json")

echo "Step 2: Deleting old A records pointing to GitHub Pages..."
echo "$RECORDS" | grep -o '"id":"[^"]*"' | cut -d'"' -f4 | while read -r record_id; do
    echo "Deleting record: $record_id"
    curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$record_id" \
        -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
        -H "Content-Type: application/json"
done

echo
echo "Step 3: Adding CNAME record to point to Cloudflare Pages..."
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json" \
    --data "{\"type\":\"CNAME\",\"name\":\"@\",\"content\":\"$TARGET\",\"ttl\":1,\"proxied\":true}"

echo
echo "✅ DNS updated successfully!"
echo
echo "It may take a few minutes for DNS to propagate."
echo "Your scraper will be live at: https://$DOMAIN/scraper/"
echo
echo "Next step: Update Stripe webhook URL to https://$DOMAIN/api/webhook"
