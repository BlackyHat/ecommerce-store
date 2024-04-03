import Image from 'next/image'
import { currentUser, auth, SignOutButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import getProducts from '@/actions/get-products'

import content from '@/data/common.json'
import { ProductCard } from '@/components/ui'

const ProfilePage: React.FC = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  if (!user) {
    redirect('/')
  }
  const products = await getProducts({
    ownerId: userId,
  })

  return (
    <section className="section">
      <div className="container h-full">
        <h2 className="mb-10 text-center text-4xl font-light uppercase">
          {content.userProfile.title}
        </h2>

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

        <ul className="mx-auto mb-20 bg-slate-100">
          <h3 className="mb-10 p-10 text-center">USER CARS ON SELLING</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map(item => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </ul>

        <ul className="mx-auto">
          <h3 className="mb-10 p-10 text-center">USER FAVOURITE CARS</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map(item => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </ul>
      </div>
    </section>
  )
}

export default ProfilePage
