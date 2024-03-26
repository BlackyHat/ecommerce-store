import { Hero } from '@/sections'
import { ProductList } from '@/components/base'

import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'

import content from '@/data/common.json'

export const revalidate = false

export default async function MainPage() {
  const heroData = await getBillboard(content.mainHeroBillboardId)
  const products = await getProducts({ isFeatured: true })

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
