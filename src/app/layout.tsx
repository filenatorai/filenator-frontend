import type { Metadata } from 'next'
// import { Navbar } from "@/components/Navbar"
import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'FileHub',
  description: 'Modern file management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}