import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'A clone of Instagram built with Next.js and Tailwind CSS.',
  keywords: ['Instagram', 'Clone', 'Next.js', 'Tailwind CSS'],
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen ${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
export default RootLayout
