import Link from 'next/link'

import { MainNav, NavbarActions } from '@/components/base'

import getCategories from '@/actions/get-categories'

import content from '@/data/common.json'

export const Header = async () => {
  const categories = await getCategories()

  return (
    <header className="border-b py-4">
      <div className="container relative flex h-16 items-center">
        <Link href="/" className="lg:ml-0 flex gap-x-2">
          <p className="text-xl font-bold">{content.company.name}</p>
        </Link>

        <MainNav data={categories} />

        <NavbarActions />
      </div>
    </header>
  )
}
