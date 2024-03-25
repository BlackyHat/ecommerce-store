import { Hero, CarsGallery } from '@/sections'

import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getBodyTypes from '@/actions/get-body-types'
import getCategories from '@/actions/get-categories'

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    bodyTypeId: string
    makeId: string
    modelId: string
    regionId: string
    cityId: string
  }
}

export async function generateStaticParams() {
  const pages = await getCategories()

  const staticParams =
    pages?.map(page =>  ({
        slug: page.name,
        categoryId: page.id,
      })
    ) || []

  return staticParams
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    bodyTypeId: searchParams.bodyTypeId,
    makeId: searchParams.makeId,
    modelId: searchParams.modelId,
    regionId: searchParams.regionId,
    cityId: searchParams.cityId,
  })

  const bodyTypes = await getBodyTypes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <>
      <Hero data={{ ...category.billboard, name: category.name }} />

      <CarsGallery products={products} bodyTypes={bodyTypes} colors={colors} />
    </>
  )
}

export default CategoryPage
