# Final Step: Add Custom Domain to Pages

DNS is configured ✅
Stripe webhook is configured ✅

**One last step:** Add techconcepts.org as a custom domain in Cloudflare Pages

## Quick Steps:

1. I'll open the Pages settings for you
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter: `techconcepts.org`
5. Click **"Continue"**
6. Cloudflare will verify DNS (already configured!)
7. Click **"Activate domain"**

Done! Your scraper will be live at: **https://techconcepts.org/scraper/**

---

## Why this step?

DNS points to Cloudflare Pages ✅
But Cloudflare Pages needs to know to serve content for techconcepts.org

This tells Pages: "When someone visits techconcepts.org, serve the techconcepts-org project"

Takes 30 seconds in the dashboard!
