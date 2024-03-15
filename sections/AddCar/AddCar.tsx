import { CarForm } from '@/components/base'

import getRegions from '@/actions/get-regions'
import getColors from '@/actions/get-colors'
import getMakes from '@/actions/get-makes'
import getBodyTypes from '@/actions/get-body-types'
import getCategories from '@/actions/get-categories'

export const AddCar = async () => {
  const categories = await getCategories()
  const bodyTypes = await getBodyTypes()
  const makes = await getMakes()

  const colors = await getColors()
  const regions = await getRegions()

  return (
    <section className="section !pt-0">
      <div className="container space-y-4">
        <CarForm
          initialData={null}
          categories={categories}
          bodyTypes={bodyTypes}
          makes={makes}
          colors={colors}
          regions={regions}
        />
      </div>
    </section>
  )
}
