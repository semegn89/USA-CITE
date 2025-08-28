import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'InLo - Digital Logistics Agency — Instant Quotes & Online Booking',
  description: 'Get instant freight quotes and manage shipments online across sea, air, road, and rail. 100% Digital. 100% Global Logistics.',
  keywords: 'logistics, freight, shipping, instant quotes, digital logistics, international shipping, InLo',
  authors: [{ name: 'Internal Logistic LLC' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'InLo - Digital Logistics Agency — Instant Quotes & Online Booking',
    description: 'Get instant freight quotes and manage shipments online across sea, air, road, and rail. 100% Digital. 100% Global Logistics.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InLo - Digital Logistics Agency — Instant Quotes & Online Booking',
    description: 'Get instant freight quotes and manage shipments online across sea, air, road, and rail. 100% Digital. 100% Global Logistics.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "legalName": "Internal Logistic LLC",
              "url": "https://yourdomain.com",
              "logo": "https://yourdomain.com/logo.png",
              "legalAddress": {
                "@type": "PostalAddress",
                "streetAddress": "501 Silverside Road, Suite 105",
                "addressLocality": "Wilmington",
                "addressRegion": "DE",
                "postalCode": "19809",
                "addressCountry": "US"
              },
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "info@internallogisticllc.com"
              }]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
