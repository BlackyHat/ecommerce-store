'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusCircle, LogIn } from 'lucide-react'

import { Button } from '@/components/ui/Button/Button'

import content from '@/data/common.json'

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { sellCar } = content.buttons

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const router = useRouter()

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/new-car')} variant="outline">
        <PlusCircle className="text-black h-4 w-4" />

        <span className="ml-2 text-sm font-medium text-black ">
          {sellCar.label}
        </span>
      </Button>

      <Button
        onClick={() => router.push('/sign-in')}
        size="icon"
        variant="outline"
      >
        <LogIn className="size-4" color="black" />
      </Button>
    </div>
  )
}
