'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/utils'

import content from '@/data/common.json'

export const MainNav: React.FC = () => {
  const pathname = usePathname()

  const routes = content.routes.map(route => ({
    href: `/${route.link}`,
    label: route.label,
    active: pathname === `/${route.link}`,
  }))

  return (
    <nav className="lg:space-x-6 mx-6 flex items-center space-x-4">
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium leading-8 transition-colors hover:text-black text-neutral-500 capitalize',
            { 'text-black': route.active }
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
