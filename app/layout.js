import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "../components/SplashCursor";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WebWizard - Creative Agency | Illustration, Animation, Website Design & Digital Marketing",
  description: "WebWizard is a premier creative agency specializing in illustration & graphic design, 2D & 3D animation, website design, logo design, and social media marketing. Transform your brand with our creative solutions!",
  keywords: "creative agency, illustration design, graphic design, 2D animation, 3D animation, website design, logo design, social media marketing, digital marketing, creative services, brand design",
  authors: [{ name: "WebWizard Creative Agency" }],
  creator: "WebWizard",
  publisher: "WebWizard",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webwizard.com',
    siteName: 'WebWizard Creative Agency',
    title: 'WebWizard - Creative Agency | Illustration, Animation, Website Design & Digital Marketing',
    description: 'WebWizard is a premier creative agency specializing in illustration & graphic design, 2D & 3D animation, website design, logo design, and social media marketing.',
    images: [
      {
        url: 'https://webwizard.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebWizard Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebWizard - Creative Agency',
    description: 'Your All-In-One Destination for Creative & Digital Success. Illustration, animation, website design, logo design, and social media marketing services.',
    images: ['https://webwizard.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://webwizard.com',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebWizard",
    "description": "Premier creative agency specializing in illustration & graphic design, 2D & 3D animation, website design, logo design, and social media marketing services.",
    "url": "https://webwizard.com",
    "logo": "https://webwizard.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-850-801-5002",
      "contactType": "customer service",
      "email": "support@webwizardhq.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/WebWizardHQ/"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Illustration & Graphic Design",
        "description": "Professional illustration and graphic design services for stunning visuals and brand graphics"
      },
      {
        "@type": "Service",
        "name": "2D & 3D Animation", 
        "description": "Creative 2D and 3D animation services including logo animations and motion graphics"
      },
      {
        "@type": "Service",
        "name": "Website Design",
        "description": "Custom website development services to create engaging online experiences"
      },
      {
        "@type": "Service",
        "name": "Logo Design",
        "description": "Professional logo design services to create memorable brand identities"
      },
      {
        "@type": "Service",
        "name": "Social Media & Digital Marketing",
        "description": "Comprehensive social media management and digital marketing strategies"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashCursor TRANSPARENT={true} />
        <Header/>
        {children}
      </body>
    </html>
  );
}
