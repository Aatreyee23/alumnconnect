import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import SnowfallWrapper from '@/components/snowfallWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AlumnConnect',
  description: 'Centralized Alumni Data Management & Engagement',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/logo_alumnconnect.png" sizes="any" />

        {/* Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = localStorage.getItem('theme') || systemPref;
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-[var(--bg-color)] text-[var(--text-color)]`}>
        
        {/* ❄️ Snowfall (Client Component) */}
        <SnowfallWrapper />

        {/* Content above snow */}
        <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
