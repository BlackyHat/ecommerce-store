import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs'
import { PlusCircle, LogIn } from 'lucide-react'

import content from '@/data/common.json'

export const NavbarActions = () => {
  const { userId } = auth()
  const { sellCar } = content.buttons

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {!userId && (
        <Link
          href="/sign-in"
          className="inline-flex size-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 smOnly:truncate"
        >
          <LogIn className="size-4" color="black" />
        </Link>
      )}

      {userId && (
        <>
          <Link
            href="/new-car"
            className="flex h-10 items-center justify-center gap-x-2 rounded-md border border-input bg-background px-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 smOnly:truncate"
          >
            <PlusCircle className="size-4 text-black" />

            <p className="text-sm font-medium text-black ">{sellCar.label}</p>
          </Link>

          <UserButton
            afterSignOutUrl="/"
            userProfileMode="navigation"
            userProfileUrl="/profile"
          />
        </>
      )}
    </div>
  )
}
