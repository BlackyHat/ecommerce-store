import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import { Header, Footer } from '@/layout'

import { ToastProvider, ModalProvider } from '@/providers'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

import meta from '@/data/meta'

export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <ModalProvider />

        <ToastProvider />

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
