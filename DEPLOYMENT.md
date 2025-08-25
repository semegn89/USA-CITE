# Deployment Guide

## 🚀 Quick Deployment to Vercel

### 1. Prepare Your Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository
5. Configure environment variables:
   ```
   RESEND_API_KEY=your_resend_api_key
   EMAIL_TO=info@internallogisticllc.com
   ```
6. Click "Deploy"

### 3. Configure Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📧 Email Setup

### Resend Configuration
1. Create account at [resend.com](https://resend.com)
2. Get your API key from dashboard
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

### Email Templates
The system sends emails with:
- Subject: "New Quote Request - [Name] - [Mode] Freight"
- Content: All form fields + timestamp + IP address

## 🔧 Post-Deployment Checklist

### 1. Update Company Information
- [ ] Update domain in `app/layout.tsx` (structured data)
- [ ] Update domain in `app/sitemap.ts`
- [ ] Update contact information in components
- [ ] Add real phone number in contact sections

### 2. SEO Configuration
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Configure Google Analytics (optional)
- [ ] Submit sitemap to search engines
- [ ] Test structured data with Google Rich Results Test

### 3. Security & Performance
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Configure security headers (already in next.config.js)
- [ ] Test form submission
- [ ] Verify email delivery

### 4. Content Updates
- [ ] Add real company logo
- [ ] Update business hours if different
- [ ] Add real social media links
- [ ] Create Terms of Service page
- [ ] Create Cookie Policy page

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking ID to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add tracking script to `app/layout.tsx`

### Custom Events
Track these events for better insights:
- Quote form submissions
- CTA button clicks
- Page scroll depth
- Contact form interactions

## 🔍 Testing Checklist

### Functionality
- [ ] Form validation works
- [ ] Email notifications sent
- [ ] All links work correctly
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### Performance
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals in green
- [ ] Images optimized
- [ ] Font loading optimized

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast ratios
- [ ] Focus indicators visible

## 🛠 Maintenance

### Regular Tasks
- Monitor form submissions
- Check email delivery rates
- Update dependencies monthly
- Review analytics data
- Test form functionality

### Updates
- Keep Next.js updated
- Monitor security advisories
- Update content as needed
- Optimize based on analytics

## 📞 Support

For deployment issues:
- Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Resend support: [resend.com/support](https://resend.com/support)

---

**Ready to go live! 🎉**
