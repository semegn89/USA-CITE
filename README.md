# Digital Logistics Agency Landing Page

A modern, accessible, and performance-optimized landing page for Internal Logistic LLC, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Instant Quote Form**: Streamlined form for quick freight quotes
- **Responsive Design**: Mobile-first approach with modern UI
- **Accessibility**: WCAG 2.2 AA compliant with proper focus states and screen reader support
- **Performance**: Optimized for Core Web Vitals (LCP ≤ 2.5s, INP < 200ms, CLS < 0.1)
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Email Integration**: Automatic email notifications via Resend
- **Form Validation**: Client and server-side validation with Zod
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod validation
- **Email Service**: Resend
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend account (for email functionality)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digital-logistics-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   EMAIL_TO=info@internallogisticllc.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── api/quote/route.ts    # API endpoint for quote form
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── HowItWorks.tsx        # Process explanation
│   ├── Services.tsx          # Services overview
│   ├── About.tsx             # Company information
│   ├── Contact.tsx           # Contact details
│   ├── QuoteForm.tsx         # Quote request form
│   └── Footer.tsx            # Site footer
├── public/                   # Static assets
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: `#0B1E3C` (Navy)
- **Accent**: `#1B5FFF` (CTA Blue)
- **Gray**: `#6B7380` (Steel Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Responsive grid system
- Consistent spacing (8px base)
- Accessible focus states
- Hover animations

## 📧 Email Configuration

The quote form sends emails via Resend. To set up:

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   EMAIL_TO=your-email@domain.com
   ```

## 🔧 Customization

### Company Information
Update company details in:
- `components/About.tsx` - Company description and address
- `components/Contact.tsx` - Contact information
- `app/layout.tsx` - Structured data and metadata

### Styling
- Colors: Edit `tailwind.config.js`
- Components: Modify individual component files
- Global styles: Update `app/globals.css`

### Form Fields
The quote form fields are defined in `components/QuoteForm.tsx`. To modify:
1. Update the Zod schema
2. Add/remove form fields
3. Update validation rules

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

### Core Web Vitals Targets
- **LCP**: ≤ 2.5s
- **INP**: < 200ms  
- **CLS**: < 0.1

### Optimization Features
- Image optimization with Next.js
- Font optimization with `font-display: swap`
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Optimized CSS with Tailwind

## ♿ Accessibility

### WCAG 2.2 AA Compliance
- Proper heading hierarchy
- Semantic HTML elements
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Color contrast ratios
- Screen reader compatibility

### Features
- Skip to content link
- Visible focus indicators
- Form error announcements
- Alt text for images
- Proper button and link labels

## 🔒 Security

### Form Protection
- Server-side validation
- Rate limiting (implemented in API route)
- Input sanitization
- CSRF protection (Next.js built-in)

### Environment Variables
- API keys stored securely
- No sensitive data in client code
- Proper error handling

## 📈 Analytics

### Google Analytics 4
To add GA4 tracking:

1. Add your GA4 ID to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. Add the tracking script to `app/layout.tsx`

### Custom Events
Track form submissions and user interactions:
- Quote form submissions
- CTA button clicks
- Page scroll depth
- Contact form interactions

## 🧪 Testing

### Manual Testing Checklist
- [ ] Form validation (all fields)
- [ ] Email delivery
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Performance metrics
- [ ] Cross-browser compatibility

### Automated Testing
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 📝 Content Management

### Updating Content
- **Hero section**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **About section**: `components/About.tsx`
- **Contact info**: `components/Contact.tsx`
- **Legal pages**: Create new pages in `app/`

### SEO Content
- Meta descriptions: `app/layout.tsx`
- Structured data: `app/layout.tsx`
- Page titles: Individual page components

## 🐛 Troubleshooting

### Common Issues

**Form not sending emails**
- Check Resend API key in environment variables
- Verify email address format
- Check browser console for errors

**Build errors**
- Ensure all dependencies are installed
- Check TypeScript errors with `npm run type-check`
- Verify environment variables are set

**Performance issues**
- Run Lighthouse audit
- Check bundle size with `npm run build`
- Optimize images and fonts

## 📞 Support

For technical support or customization requests:
- Email: info@internallogisticllc.com
- Create an issue in the repository

## 📄 License

This project is proprietary software for Internal Logistic LLC.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
