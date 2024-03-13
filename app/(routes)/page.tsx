import { Billboard, ProductList } from '@/components/base'
import Container from '@/components/ui/container'

import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'

export const revalidate = 0

export default async function MainPage() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('1659a89a-8825-4d8c-beec-75182696b99b')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
