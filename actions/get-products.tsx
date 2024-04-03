import { Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  ownerId?: string
  categoryId?: string
  colorId?: string
  bodyTypeId?: string
  makeId?: string
  modelId?: string
  regionId?: string
  cityId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      ownerId: query.ownerId,
      categoryId: query.categoryId,
      bodyTypeId: query.bodyTypeId,
      colorId: query.colorId,
      makeId: query.makeId,
      modelId: query.modelId,
      regionId: query.regionId,
      cityId: query.cityId,
      isFeatured: query.isFeatured,
    },
  })
  const res = await fetch(url)
  return res.json()
}

export default getProducts
