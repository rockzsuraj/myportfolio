import { Fira_Code } from 'next/font/google';
import './globals.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Sidebar from './components/sidebar/Sidebar';
import SidebarRight from './components/sidebar/SidebarRight';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from './head';

// Initialize Fira Code with default settings
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: '300', // Regular
  variable: '--font-default', // CSS variable for global use
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className={`${firaCode.className} font-mono flex flex-col min-h-screen`}>
        {/* Wrap the main content in a div with flex-grow */}
        <div className="flex flex-col flex-grow">
          <div className='flex flex-1'>
            <aside className='hidden md:flex overflow-hidden'>
              <Sidebar />
            </aside>
            
            <div className='flex-1 flex flex-col'>
              <Header />
              <main className='flex-grow'>
                {children}
              </main>
            </div>
            
            <aside className='hidden md:flex overflow-hidden'>
              <SidebarRight />
            </aside>
          </div>
        </div>
        
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}