import { FieldOptions } from '@/types'

export interface FormProductSelectProps {
  loading: boolean
  fieldName: string
  label: string
  fieldOptions: (string | FieldOptions)[]
}
