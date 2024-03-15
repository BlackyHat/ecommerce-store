import { Color, BodyType } from '@/types'

export interface FilterProps {
  name: string
  data: (BodyType | Color)[]
  valueKey: string
}
