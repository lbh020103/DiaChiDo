import Heading from '@/components/Heading'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '“Địa chỉ đỏ” - Di tích lịch sử xã Duy Phước',
  description: 'Tuổi trẻ Duy Phước',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}  >
        <Heading />
        {children}
        <Footer />
      </body>
    </html>
  )
}
