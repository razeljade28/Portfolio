# Crypto Writer Portfolio — GitHub Hosting Guide

Your portfolio is a fully self-contained website with **offline support**. Once someone visits it, it works even without internet.

---

## Files in this folder

| File | Purpose |
|------|---------|
| `index.html` | Your portfolio (72 articles, search, filter) |
| `sw.js` | Service Worker — enables offline access |
| `README.md` | This guide |

---

## How to host on GitHub Pages (free, permanent)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you don't have an account.

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `portfolio` (or anything you like)
3. Set it to **Public**
4. Check **"Add a README file"**
5. Click **Create repository**

### Step 3 — Upload your files
1. Inside your new repo, click **"Add file"** → **"Upload files"**
2. Drag and drop these 2 files:
   - `index.html`
   - `sw.js`
3. At the bottom, click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repo's **Settings** tab (top menu)
2. Scroll down to **"Pages"** (left sidebar)
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **branch: main** and **folder: / (root)**
5. Click **Save**

### Step 5 — Get your URL
After ~60 seconds, GitHub will show you your live URL:
```
https://YOUR-USERNAME.github.io/portfolio/
```

That's it. Your portfolio is now live and permanent.

---

## Updating articles later

When you publish new articles on LBank (or anywhere else), just:
1. Open `index.html` in any text editor (Notepad, VS Code, etc.)
2. Find the `const articles = [` section
3. Add a new entry at the top:

```js
{title:"Your Article Title Here", tag:"Bitcoin", date:"2026-06-01", url:"https://www.lbank.com/creator/your-article-slug"},
```

4. Upload the updated `index.html` to GitHub (same steps as above)
5. Your site updates within a minute

---

## Available tags

Use one of these for the `tag` field:
- `Bitcoin`
- `Ethereum`
- `Regulation`
- `Security`
- `Industry`
- `Stablecoins`
- `DeFi`
- `Tokenization`

---

## Offline mode — how it works

The Service Worker (`sw.js`) caches the entire portfolio in the visitor's browser on first visit. After that:
- Works with no internet
- The banner "You're offline — showing cached portfolio" appears when offline
- All 72 article links are preserved (though the LBank pages themselves need internet)

---

## Custom domain (optional)

If you want `yourname.com` instead of `github.io`:
1. Buy a domain on Namecheap or Cloudflare (~$10/year)
2. In GitHub Pages settings, add your custom domain
3. Point your domain's DNS to GitHub (GitHub shows you the IPs)

Done — your portfolio survives any platform shutdown.
