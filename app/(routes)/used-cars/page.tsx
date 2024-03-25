import type { Metadata } from 'next'

import { Hero, CarsGallery } from '@/sections'

import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getBodyTypes from '@/actions/get-body-types'

import content from '@/data/common.json'
import meta from '@/data/meta.json'

export const metadata: Metadata = meta.usedCars

interface UsedCarsPageProps {
  searchParams: {
    colorId: string
    bodyTypeId: string
    makeId: string
    modelId: string
    regionId: string
    cityId: string
  }
}

const UsedCarsPage: React.FC<UsedCarsPageProps> = async ({ searchParams }) => {
  const products = await getProducts({
    colorId: searchParams.colorId,
    bodyTypeId: searchParams.bodyTypeId,
    makeId: searchParams.makeId,
    modelId: searchParams.modelId,
    regionId: searchParams.regionId,
    cityId: searchParams.cityId,
  })

  const bodyTypes = await getBodyTypes()
  const colors = await getColors()
  const category = await getCategory(content.routes[0].id)

  return (
    <>
      <Hero data={{ ...category.billboard, name: category.name }} />

      <CarsGallery products={products} bodyTypes={bodyTypes} colors={colors} />
    </>
  )
}

export default UsedCarsPage
