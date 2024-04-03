import type { Metadata } from 'next'

import { Hero } from '@/sections'

import getCategory from '@/actions/get-category'

import content from '@/data/common.json'
import meta from '@/data/meta.json'

export const metadata: Metadata = meta.usedCars

export default async function PartsPage() {
  const category = await getCategory(content.routes[1].id)

  return (
    <>
      <Hero data={{ ...category.billboard, name: category.name }} />

      <section className="section">
        <div className="container h-full">
          <h2 className="text-center text-4xl font-light uppercase">
            {category.name}
          </h2>
        </div>
      </section>
    </>
  )
}
