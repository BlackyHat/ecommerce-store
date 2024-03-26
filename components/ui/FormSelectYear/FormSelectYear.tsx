'use client'

import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'

import { FormSelectYearProps } from './types'

export const FormSelectYear: React.FC<FormSelectYearProps> = ({
  fieldName,
  label,
  placeholder,
  loading,
}) => {
  const { control } = useFormContext()

  const years = (() => {
    const currentYear = new Date().getFullYear()

    const years = []
    for (let i = currentYear; i > currentYear - 100; i--) {
      years.push(i)
    }
    return years
  })()

  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            disabled={loading}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>

            <SelectContent className="h-64 overflow-y-auto">
              {years.map(year => (
                <SelectItem key={year} value={String(year)}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
