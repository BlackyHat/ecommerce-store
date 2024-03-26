import Link from 'next/link'

import { MainNav, NavbarActions } from '@/components/base'

import content from '@/data/common.json'

export const Header = async () => (
  <header className="border-b py-4">
    <div className="container relative flex h-16 items-center">
      <Link href="/" className="flex gap-x-2 lg:ml-0">
        <p className="text-xl font-bold">{content.company.name}</p>
      </Link>

      <MainNav />

      <NavbarActions />
    </div>
  </header>
)
