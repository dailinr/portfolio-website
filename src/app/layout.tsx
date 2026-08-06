import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import SmoothScrollProvider from "@/src/components/providers/SmoothScrollProvider";
import './globals.css'

export const metadata: Metadata = {
  title: 'Dailin Romero - Full-Stack Developer & Designer',
  description: 'Portfolio of Dailin Romero, a full-stack web developer and UI/UX designer.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#191C22',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="antialiased bg-background text-foreground font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider> 
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
