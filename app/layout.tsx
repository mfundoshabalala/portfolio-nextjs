import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mfundo Shabalala',
    template: '%s | Mfundo Shabalala',
  },
  description: 'Mfundo Shabalala\'s Developer Portfolio',
  metadataBase: new URL('https://www.mfundoshabalala.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

interface Route {
  id: number,
  name: string,
  route: string
};

const routes: Route[] = [
  { id: 1, name: 'Home', route: '/' },
  { id: 2, name: 'Profile', route: '/profile' },
  { id: 3, name: 'Projects', route:'/projects' },
  { id: 4, name: 'Blog', route: '/blog' }
];

export function Navigation({ routes }: { routes: Route[] }) {
  return (
    <nav className='p-4'>
      <ul className='flex justify-center items-center gap-4'>
        {routes.map((r:Route) => {
          return <li key={r.id}><Link href={r.route}>{r.name}</Link></li>;
        })}
      </ul>
    </nav>
  );
};

export function Footer() {
  return (
    <footer className='p-4'>
      <p>&copy; Reserved</p>
    </footer>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen w-full'>
          <Navigation routes={routes} />
          <main className='flex-1'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
