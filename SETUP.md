# Dermabar Website Setup Guide

## Quick Start Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_ACUITY_OWNER_ID=your_acuity_id_here
NEXT_PUBLIC_SITE_URL=https://dermabar.ca
```

### 3. Update Acuity Booking
Edit `components/booking/BookingWidget.tsx`:
- Replace the iframe `src` URL with your Acuity Scheduling embed URL
- Or use your Acuity owner ID in the URL pattern

### 4. Update Contact Information
Search and replace throughout the codebase:
- Phone number: `(416) 555-0123` → Your actual number
- Email: `info@dermabar.ca` → Your actual email
- Address: `2145 Danforth Ave, Toronto, ON M4C 1K1` → Verify/update

### 5. Update Logo
- Ensure your logo is in `/public/Derma+Bar+Logo-156w.webp`
- Or update the logo path in `components/layout/Header.tsx` and `Footer.tsx`

### 6. Google Maps
Update the Google Maps embed in `app/contact/page.tsx`:
- Get your location's embed code from Google Maps
- Replace the iframe `src` URL

### 7. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Content Updates Needed

### Immediate Updates
- [ ] Replace placeholder phone number
- [ ] Update Acuity booking widget URL
- [ ] Add real testimonials (currently using placeholder data)
- [ ] Update Google Maps embed coordinates
- [ ] Verify logo displays correctly

### Content to Add
- [ ] Real team member photos and bios
- [ ] Before/after gallery images
- [ ] Actual service descriptions and pricing
- [ ] Blog posts (if implementing blog)
- [ ] Product catalog (if implementing shop)

### Integration Setup
- [ ] Configure form submission endpoint (contact form)
- [ ] Set up Google Analytics
- [ ] Configure email marketing (Mailchimp/Klaviyo)
- [ ] Set up Sanity CMS (optional)
- [ ] Set up Shopify storefront (optional)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production
Make sure to set these in your hosting platform:
- `NEXT_PUBLIC_ACUITY_OWNER_ID`
- `NEXT_PUBLIC_SITE_URL`
- Any other API keys or IDs

## Customization

### Colors
Edit `tailwind.config.ts` - modify the color palette in the `theme.extend.colors` section.

### Fonts
Update font imports in `app/layout.tsx` - currently using Inter and Playfair Display.

### Content
- Homepage: `app/page.tsx` and `components/home/`
- Services: `app/services/`
- About: `app/about/page.tsx`
- Contact: `app/contact/page.tsx`

## Support

For questions or issues, refer to the main README.md or contact the development team.

