import { CarForm } from '@/components/base'

import getRegions from '@/actions/get-regions'
import getColors from '@/actions/get-colors'
import getMakes from '@/actions/get-makes'
import getBodyTypes from '@/actions/get-body-types'
import getCategories from '@/actions/get-categories'

export default async function NewCarPage() {
  const categories = await getCategories()
  const bodyTypes = await getBodyTypes()
  const makes = await getMakes()
  const colors = await getColors()
  const regions = await getRegions()

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="flex-1 space-y-4 p-8 pt-0">
        <CarForm
          initialData={null}
          categories={categories}
          bodyTypes={bodyTypes}
          makes={makes}
          colors={colors}
          regions={regions}
        />
      </div>
    </div>
  )
}
