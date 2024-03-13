import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'

import './globals.css'

import { Header, Footer } from '@/layout'

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
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ModalProvider />
        <ToastProvider />
      </body>
    </html>
  )
}
