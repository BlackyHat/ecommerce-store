import { Hero } from '@/sections'
import { ProductList } from '@/components/base'

import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'

export const revalidate = false

export default async function MainPage() {
  const products = await getProducts({ isFeatured: true })
  const heroData = await getBillboard('1659a89a-8825-4d8c-beec-75182696b99b')

  return (
    <>
      <Hero data={heroData} />

      <section className="section">
        <div className="container flex flex-col gap-y-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </section>
    </>
  )
}
