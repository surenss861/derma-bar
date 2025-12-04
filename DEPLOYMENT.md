# Vercel Deployment Guide for Dermabar

## Quick Fix Checklist

### 1. Ensure All Files Are Committed
All project files must be committed to git for Vercel to deploy:

```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

### 2. Vercel Project Settings

In your Vercel dashboard, ensure:

**Framework Preset:** Next.js (auto-detected)
**Root Directory:** `./` (leave empty or set to root)
**Build Command:** Leave empty (Vercel auto-detects)
**Output Directory:** Leave empty (Vercel auto-detects)
**Install Command:** Leave empty (Vercel auto-detects)

**Node.js Version:** 18.x or higher

### 3. Environment Variables (if needed)

Add these in Vercel Dashboard → Settings → Environment Variables:

- `NEXT_PUBLIC_ACUITY_OWNER_ID` (optional, for booking widget)
- `NEXT_PUBLIC_SITE_URL` (optional, defaults to Vercel URL)

### 4. Deployment Settings

- **Production Branch:** `main` (or your default branch)
- **Auto Deploy:** Enabled

### 5. Common 404 Issues & Solutions

#### Issue: 404 NOT_FOUND Error
**Causes:**
1. Files not committed to git
2. Wrong root directory in Vercel settings
3. Build failing silently
4. Framework not auto-detected

**Solutions:**
1. Check Vercel deployment logs
2. Verify all files are in git repository
3. Ensure `package.json` is in root directory
4. Verify `app/` directory exists with `page.tsx` and `layout.tsx`

#### Issue: Build Fails
**Check:**
- Node.js version compatibility (should be 18+)
- All dependencies in `package.json`
- No syntax errors in code
- TypeScript configuration is correct

### 6. Verify Deployment

After deployment:
1. Check build logs in Vercel dashboard
2. Visit the deployment URL
3. Test all routes:
   - `/` (homepage)
   - `/about`
   - `/book`
   - `/contact`
   - `/services`

### 7. Manual Redeployment

If needed, trigger a new deployment:
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Click "..." on latest deployment
5. Click "Redeploy"

### 8. Check Build Logs

If issues persist:
1. Open Vercel Dashboard
2. Go to your project
3. Click on the failed deployment
4. Check "Build Logs" tab
5. Look for error messages

## Current Configuration

✅ Next.js 15 with App Router
✅ TypeScript configured
✅ Tailwind CSS configured
✅ All components present
✅ All pages configured
✅ Build succeeds locally

## Next Steps

1. Commit all files to git
2. Push to GitHub/GitLab/Bitbucket
3. Verify Vercel project settings
4. Trigger new deployment
5. Check deployment logs for errors

