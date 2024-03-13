import { CarOverview } from '@/sections'

import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'

export default async function CarPage({
  params,
}: {
  params: { carId: string }
}) {
  const product = await getProduct(params.carId)
  const categoryId = product.category.id

  const suggestedProducts = await getProducts({
    categoryId,
  })

  return (
    <>
      <CarOverview productsList={suggestedProducts} product={product} />
    </>
  )
}
