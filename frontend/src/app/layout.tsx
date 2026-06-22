import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blog Hub',
  description:
    'Get the latest updates and insights on web development, programming, and technology trends. Explore our blog for in-depth articles, tutorials, and expert opinions to stay ahead in the tech world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {/* Navigation Layer */}
        <Header />

        {/* Main Blog Body Wrapper */}
        <main className="flex-1">{children}</main>

        {/* Global Blog Footer */}
        <footer className="mt-auto border-t py-6 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Blog Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
