# Fix DNS in 30 seconds

I've opened 2 browser tabs for you:

## Tab 1: Create API Token
- Click "Continue to summary"
- Click "Create Token"
- **Copy the token** (starts with "...")

## Tab 2: DNS Records (for reference)
Shows current DNS pointing to GitHub Pages

## Run This Command:

```bash
cd /Users/jenyagowork/ClaudeCodeWorkspace/Projects/techconcepts-hub

# Paste your token here:
export CLOUDFLARE_API_TOKEN='paste-your-token-here'

# Run the fix script:
./fix-dns.sh
```

That's it! DNS will update in 2-5 minutes.

Your scraper will be live at: **https://techconcepts.org/scraper/**

---

## What the script does:
1. Deletes old A records (185.199.*.* - GitHub Pages)
2. Adds CNAME record pointing to techconcepts-org.pages.dev
3. Enables Cloudflare proxy (orange cloud)

## After DNS updates:
Update Stripe webhook URL to: `https://techconcepts.org/api/webhook`
