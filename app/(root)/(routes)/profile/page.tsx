import { currentUser, auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { FavCars, UserInfo } from '@/sections'
import { ProductCard } from '@/components/ui'

import getProducts from '@/actions/get-products'

import content from '@/data/common.json'

export default async function ProfilePage() {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  if (!user) {
    redirect('/')
  }

  const { pageTitle, userPhoto, carsTitle } = content.userProfile
  const products = await getProducts({
    ownerId: userId,
  })

  const userName = user?.firstName || user?.username || userPhoto

  return (
    <>
      <UserInfo
        title={pageTitle}
        image={{ src: user?.imageUrl, alt: userName }}
        email={user.emailAddresses[0].emailAddress}
        userName={user.firstName}
      />

      <FavCars />

      <section className="section">
        <div className="container">
          <h3 className="mb-10 p-10 text-center">{carsTitle}</h3>

          <ul className="mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {products.map(item => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </ul>
        </div>
      </section>
    </>
  )
}
