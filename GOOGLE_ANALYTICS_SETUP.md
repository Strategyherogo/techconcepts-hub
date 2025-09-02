# Google Analytics Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Create Google Analytics Account
1. Go to https://analytics.google.com
2. Click "Start measuring"
3. Enter account name: "TechConcepts"
4. Enter property name: "techconcepts.org"
5. Select your timezone and currency
6. Click "Create"

### Step 2: Get Your Measurement ID
1. After creating the property, you'll see a Measurement ID
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

### Step 3: Update Your Website
1. Open `index.html`
2. Find line 67: `gtag('config', 'G-MEASUREMENT-ID');`
3. Replace `G-MEASUREMENT-ID` with your actual ID
4. Save the file

### Step 4: Deploy
```bash
cd ~/Desktop/Apps\ Factory/techconcepts-hub
npm run deploy
```

### Step 5: Verify It's Working
1. Go to Google Analytics
2. Click "Realtime" in the left menu
3. Visit your website in another tab
4. You should see yourself as an active user

## What Gets Tracked

- Page views
- User demographics
- Traffic sources
- User behavior flow
- Device types
- Geographic locations
- Session duration
- Bounce rate

## Privacy Compliance

If you have EU visitors, consider adding a cookie consent banner:

```javascript
// Add to your App.jsx
import CookieConsent from 'react-cookie-consent';

<CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="techconceptsCookieConsent"
>
  This website uses cookies to enhance the user experience.
</CookieConsent>
```

## Alternative: Privacy-First Analytics

If you prefer not to use Google Analytics, Plausible is already set up as an alternative in the HTML (commented out). To use it:

1. Sign up at https://plausible.io
2. Add your domain
3. Uncomment line 72 in index.html
4. Remove Google Analytics code

## Dashboard Access

Once set up, view your analytics at:
https://analytics.google.com

## Important Metrics to Watch

1. **Acquisition**: Where visitors come from
2. **Engagement**: Which pages they visit most
3. **Conversions**: Contact form submissions
4. **User Flow**: How they navigate your site

---

*Note: Analytics data starts collecting immediately but may take 24-48 hours to show full reports.*