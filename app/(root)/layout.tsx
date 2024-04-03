import { Header, Footer } from '@/layout'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}
