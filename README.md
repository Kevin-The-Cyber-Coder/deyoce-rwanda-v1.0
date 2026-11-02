# DEYOCE RWANDA CBC – website

Multi-page React site (React Router) with Lucide icons, Inter type and an orange / blue / green / grey palette taken from the logo.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
```

## Pages
`/` Home · `/about` · `/programs` · `/focus` · `/where-we-work` · `/get-involved`

## Editing
- Text, programs, places, icons and social links: `src/data.js` (icons are Lucide component imports)
- Colors and fonts: CSS variables at the top of `src/styles.css`
- Logo and icons: `public/logo.png`, `public/favicon.ico`, `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png`

## Hosting
Because pages use real URLs, the host must send every path to `index.html`. `public/_redirects` (Netlify/Cloudflare) and `vercel.json` (Vercel) are included.
