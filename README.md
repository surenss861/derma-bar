# Dermabar Med Spa Website

A premium, high-performance website for Dermabar Med Spa built with Next.js 15, TypeScript, and TailwindCSS. This site follows global best practices for medical aesthetic clinic websites, featuring elegant design, seamless booking integration, and optimized performance.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CMS**: Sanity (recommended, to be configured)
- **E-commerce**: Shopify Headless (recommended, to be configured)
- **Booking**: Acuity Scheduling (embedded)
- **Hosting**: Vercel (recommended)

## ✨ Features

- **Modern, Luxury Design**: Clean, clinical-luxury aesthetic with ample white space and elegant typography
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Performance Optimized**: Fast load times, image optimization, lazy loading
- **SEO Ready**: Comprehensive metadata, schema markup, and semantic HTML
- **Booking Integration**: Seamless Acuity Scheduling integration
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **Accessible**: WCAG-compliant components and semantic markup

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   ├── book/              # Booking page
│   ├── services/          # Service pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── layout/            # Header, Footer
│   ├── home/              # Homepage components
│   ├── ui/                # Reusable UI components
│   ├── booking/           # Booking widgets
│   └── contact/           # Contact forms
├── public/                # Static assets
│   └── Derma+Bar+Logo-156w.webp
└── package.json           # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Set up environment variables** (create `.env.local`):
```env
# Acuity Scheduling (replace with your actual ID)
NEXT_PUBLIC_ACUITY_OWNER_ID=your_acuity_id

# Sanity CMS (when configured)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

3. **Update Acuity Booking Widget**:
   - Edit `components/booking/BookingWidget.tsx`
   - Replace `YOUR_ACUITY_ID` with your actual Acuity Scheduling owner ID
   - Or use the embed code from your Acuity dashboard

4. **Update logo and images**:
   - Place your logo in `/public/Derma+Bar+Logo-156w.webp`
   - Add other images to `/public/` directory
   - Update image references in components as needed

5. **Run development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Acuity Scheduling Setup

1. Log into your Acuity Scheduling account
2. Go to Settings → Embedding
3. Copy your embed code or owner ID
4. Update `components/booking/BookingWidget.tsx` with your embed URL

### Customization

- **Colors**: Edit `tailwind.config.ts` to customize the color palette
- **Fonts**: Update font imports in `app/layout.tsx`
- **Content**: Update content in component files or integrate with Sanity CMS
- **Metadata**: Update SEO metadata in `app/layout.tsx` and page files

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

Vercel will automatically:
- Optimize images
- Enable edge caching
- Provide analytics
- Handle SSL certificates

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance Optimization

This site is optimized for:
- **PageSpeed**: Target 90+ score
- **Mobile**: Fully responsive, touch-optimized
- **SEO**: Comprehensive metadata and schema markup
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Next Steps

### Recommended Integrations

1. **Sanity CMS**: For easy content management
   - Install: `npm install @sanity/client @sanity/image-url`
   - Set up Sanity project and configure

2. **Shopify Storefront**: For e-commerce
   - Set up Shopify store
   - Install Shopify Hydrogen or use Storefront API

3. **Analytics**: 
   - Add Google Analytics 4
   - Set up conversion tracking

4. **Email Marketing**:
   - Integrate Mailchimp or Klaviyo
   - Add newsletter signup forms

5. **Live Chat**:
   - Add Intercom, Drift, or similar
   - Configure chat widget

### Content Updates Needed

- [ ] Replace placeholder phone number with actual number
- [ ] Update Google Maps embed with actual coordinates
- [ ] Add real testimonials and reviews
- [ ] Add before/after gallery images
- [ ] Create blog/content section
- [ ] Add team member profiles
- [ ] Update service descriptions with actual details
- [ ] Configure form submission endpoint

## 📄 License

Proprietary - Dermabar Med Spa

## 🤝 Support

For questions or issues, contact the development team.

---

Built with ❤️ for Dermabar Med Spa

# derma-bar
