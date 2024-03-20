'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/utils'

import { MainNavProps } from './types'

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data
    .sort((a, b) => b.name.localeCompare(a.name))
    .map(route => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    }))

  return (
    <nav className="lg:space-x-6 mx-6 flex items-center space-x-4">
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
