import { MainNav, NavbarActions } from '@/components/base'
import { Logo } from '@/components/ui'

export const Header = async () => (
  <header className="border-b py-2">
    <div className="container relative flex h-16 items-center justify-between">
      <Logo />

      <div className="flex gap-10">
        <MainNav />

        <NavbarActions />
      </div>
    </div>
  </header>
)
