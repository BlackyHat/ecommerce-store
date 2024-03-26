import Link from 'next/link'

import { cn } from '@/utils'

import content from '@/data/common.json'

import LogoIcon from '@/public/icons/logo-wheel.svg'

export const Logo: React.FC = () => {
  return (
    <Link href="/" className={cn('relative flex items-center gap-x-1 lg:ml-0')}>
      <LogoIcon className="size-16 pt-3" />

      <p className="text-xl font-bold">{content.company.name}</p>
    </Link>
  )
}
