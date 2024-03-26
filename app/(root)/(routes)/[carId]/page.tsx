import { Metadata } from 'next'

import { CarOverview } from '@/sections'

import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'

export const dynamicParams = false
export const dynamic = 'error'
export const revalidate = false

export async function generateMetadata({
  params: { carId },
}: {
  params: { carId: string }
}): Promise<Metadata> {
  const carData = await getProduct(carId)
  const { make, model, year, color, fuel, price } = carData

  const carInfo = [
    make.label,
    model.label,
    year,
    color.name,
    fuel,
    `${price} $`,
  ].join(', ')

  const title = `Carfor sale on CarHub - ${carInfo}`

  return {
    title,
    description: title,
    keywords: carInfo,
    alternates: {
      canonical: `/${carId}`,
    },
  }
}

export async function generateStaticParams() {
  const pages = await getProducts({})

  const staticParams =
    pages?.map(page => {
      return {
        carId: page.id,
      }
    }) || []

  return staticParams
}

export default async function CarPage({
  params,
}: {
  params: { carId: string }
}) {
  const product = await getProduct(params.carId)

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  })

  return <CarOverview productsList={suggestedProducts} product={product} />
}
