import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import ModalProvider from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'

import './globals.css'

import Navbar from '@/components/base/Navbar/Navbar'
import { Footer } from '@/layout'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'New & Used Cars for Sale - Car Hub UA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
