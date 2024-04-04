import { MainNav, NavbarActions } from '@/components/base'
import { MobileMenu } from '@/components/base/MobileMenu'
import { Logo } from '@/components/ui'

export const Header = () => (
  <header className="border-b py-2">
    <div className="container relative flex h-16 items-center justify-between">
      <Logo />

      <div className="hidden gap-10 md:flex">
        <MainNav />

        <NavbarActions />
      </div>

      <MobileMenu>
        <NavbarActions className="m-0 justify-between" />
      </MobileMenu>
    </div>
  </header>
)
