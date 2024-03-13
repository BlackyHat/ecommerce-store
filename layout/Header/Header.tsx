import Link from 'next/link'

import { MainNav, NavbarActions } from '@/components/base'

import getCategories from '@/actions/get-categories'

export const Header: React.FC = async () => {
  const categories = await getCategories()

  return (
    <header className="border-b py-4">
      <div className="container relative flex h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">CARSHUB_UA</p>
        </Link>

        <MainNav data={categories} />

        <NavbarActions />
      </div>
    </header>
  )
}
