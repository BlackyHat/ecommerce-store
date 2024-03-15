import { BodyType, Category, City, Color, Make, Model, Region } from '@/types'

export interface ProductFormProps {
  loading: boolean
  categories: Category[]
  bodyTypes: BodyType[]
  makes: (Make & { models: Model[] })[]
  colors: Color[]
  regions: (Region & { cities: City[] })[]
}
