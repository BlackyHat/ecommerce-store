'use client'

import { useFormContext } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'

import { Heading } from '@/components/base'
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
  Input,
} from '@/components/ui'

import { FormContactInfoProps } from './types'

export const FormContactInfo: React.FC<FormContactInfoProps> = ({
  loading,
}) => {
  const { control } = useFormContext()

  return (
    <>
      <Heading
        title="Contact information"
        description="Enter contact information"
        className="text-xl"
      />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8">
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PatternFormat
                  format="+38 (###) ###-##-##"
                  disabled={loading}
                  placeholder="+38 (099) 123 45 67"
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
