import { FieldOptions } from '@/types'

export interface FormProductSelectProps {
  loading: boolean
  fieldName: string
  label: string
  placeholder: string
  fieldOptions: (string | FieldOptions)[]
}
