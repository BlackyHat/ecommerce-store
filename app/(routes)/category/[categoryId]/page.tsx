import Billboard from '@/components/base/Billboard/Billboard'
import Container from '@/components/ui/container'
import Filter from './components/filter'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/ProductCard/ProductCard'
import MobileFilters from './components/mobile-filters'

import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getBodyTypes from '@/actions/get-body-types'

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
    <div className="bg-white">
      <Container>
        <Billboard data={{ ...category.billboard, name: category.name }} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters bodyTypes={bodyTypes} colors={colors} />

            <div className="hidden lg:block">
              <Filter
                name="Body Types"
                data={bodyTypes}
                valueKey="bodyTypeId"
              />

              <Filter name="Colors" data={colors} valueKey="colorId" />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(item => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
