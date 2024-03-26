'use client'

import { useFormContext } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'

import {
  Heading,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
  Input,
} from '@/components/ui'

import content from '@/data/car-form.json'

import { FormContactInfoProps } from './types'

export const FormContactInfo: React.FC<FormContactInfoProps> = ({
  loading,
}) => {
  const { control } = useFormContext()
  const { title, desc, input } = content.form.contactInfo

  return (
    <>
      <Heading title={title} description={desc} className="text-xl" />
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <FormField
          control={control}
          name={input.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{input.label}</FormLabel>
              <FormControl>
                <PatternFormat
                  format={input.format}
                  disabled={loading}
                  placeholder={input.placeholder}
                  mask="_"
                  customInput={Input}
                  value={field.value}
                  onValueChange={values =>
                    field.onChange(values.formattedValue)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}
