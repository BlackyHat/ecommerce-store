import { currentUser, auth, SignOutButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import content from '@/data/common.json'
import Image from 'next/image'

const ProfilePage: React.FC = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  if (!user) {
    redirect('/')
  }

  return (
    <section className="section">
      <div className="container h-full">
        <h2 className="mb-10 text-center text-4xl font-light uppercase">
          {content.userProfile.title}
        </h2>
      </div>

      <div className="mx-auto w-fit space-y-4">
        <Image
          src={user?.imageUrl}
          alt={user?.firstName || user?.username || "User's photo"}
          width={80}
          height={80}
          className="size-20 rounded-full border"
        />
        <p>{user.emailAddresses[0].emailAddress}</p>
        <p>{user.firstName}</p>
        <SignOutButton />
      </div>
    </section>
  )
}

export default ProfilePage
