'use client'

import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SelectedItems,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui'

import { FormProductSelectProps } from './types'

export const FormProductSelect: React.FC<FormProductSelectProps> = ({
  fieldName,
  label,
  placeholder,
  loading,
  fieldOptions,
}) => {
  const { register, control } = useFormContext()

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
            value={field.value}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger {...register(fieldName)}>
                <SelectValue
                  defaultValue={field.value}
                  placeholder={placeholder}
                />
              </SelectTrigger>
            </FormControl>

            <SelectContent className="max-h-64 cursor-pointer overflow-y-auto">
              <SelectedItems options={fieldOptions} />
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
