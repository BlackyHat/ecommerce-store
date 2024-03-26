import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToastProvider, ModalProvider } from '@/providers'

import meta from '@/data/meta'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
