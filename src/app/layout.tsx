
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/lib/site';

import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: 'TechMindsVerse | Technology Mindset Universe',
    template: '%s | TechMindsVerse',
  },

  description: site.description,

  applicationName: site.name,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },

  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
