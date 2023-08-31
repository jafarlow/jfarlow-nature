import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Jacob Farlow: Nature Photographer',
  description: 'A portfolio of images from nature',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='root'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
