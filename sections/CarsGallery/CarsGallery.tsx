import { Filter, NoResults, ProductCard, MobileFilters } from '@/components/ui'

import { CarsGalleryProps } from './types'

export const CarsGallery: React.FC<CarsGalleryProps> = async ({
  products,
  bodyTypes,
  colors,
}) => {
  return (
    <div className="section">
      <div className="container lg:grid lg:grid-cols-5 lg:gap-x-8">
        <MobileFilters bodyTypes={bodyTypes} colors={colors} />

        <aside className="hidden lg:block">
          <Filter name="Body Types" data={bodyTypes} valueKey="bodyTypeId" />

          <Filter name="Colors" data={colors} valueKey="colorId" />
        </aside>

        <div className="mt-6 lg:col-span-4 lg:mt-0">
          {products.length === 0 && <NoResults />}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map(item => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
