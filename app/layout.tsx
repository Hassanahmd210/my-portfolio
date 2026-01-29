import type { Metadata } from 'next';
import { Space_Grotesk, Inconsolata, Poppins, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import InteractiveElements from '@/components/InteractiveElements';

// Font imports for that tech nerd vibe
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  variable: '--font-inconsolata'
});

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Hassan Ahmad - Full Stack Developer',
  description: 'Professional portfolio showcasing full-stack development projects and skills',
  keywords: 'developer, full-stack, portfolio, react, next.js, typescript',
  authors: [{ name: 'Hassan Ahmad Sayyad' }],
  creator: 'Hassan Ahmad Sayyad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Hassan Ahmad Sayyad - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development projects and skills',
    images: [
      {
        url: 'hassan_pf.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development projects and skills',
    images: ['hassan_pf.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${inconsolata.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary text-gray-100 overflow-x-hidden">
        <AnimatedBackground />
        <InteractiveElements />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
