import './styles.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex size-full items-center justify-center bg-[url('/images/signup/signup_bg.jpg')] bg-repeat">
      {children}
    </main>
  )
}
