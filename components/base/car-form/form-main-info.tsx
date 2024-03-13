'use client'

import FormProductSelect from './ui/form-product-select'
import Heading from '@/components/base/Heading/Heading'
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from '@/components/ui/Form/Form'
import { Input } from '@/components/ui/Input/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select/Select'
import {
  BodyType,
  Category,
  City,
  Color,
  FuelType,
  GearboxType,
  Headlights,
  InteriorMatherial,
  Make,
  Model,
  Region,
  SpareTire,
  TypeOfDriveOption,
} from '@/types'
import { enumValues } from '@/utils/enumValues'
import React from 'react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

const currentYear = new Date().getFullYear()

interface ProductFormProps {
  loading: boolean
  categories: Category[]
  bodyTypes: BodyType[]
  makes: (Make & { models: Model[] })[]
  colors: Color[]
  regions: (Region & { cities: City[] })[]
}

const FormMainInfo: React.FC<ProductFormProps> = ({
  loading,
  categories,
  bodyTypes,
  makes,
  colors,
  regions,
}) => {
  const { register, watch, control } = useFormContext()

  const [choosedModels, setChoosedModels] = useState<Model[]>([])
  const [choosedCity, setChoosedCity] = useState<City[]>([])
  const selectedMakeId = watch('makeId')
  useEffect(() => {
    if (selectedMakeId) {
      const [choosedMake] = makes.filter(({ id }) => id === selectedMakeId)
      setChoosedModels(choosedMake?.models.sort())
    }
  }, [selectedMakeId, makes])

  const selectedRegionId = watch('regionId')
  useEffect(() => {
    if (selectedRegionId) {
      const [choosedRegion] = regions.filter(
        ({ id }) => id === selectedRegionId
      )
      setChoosedCity(choosedRegion?.cities)
    }
  }, [selectedRegionId, regions])
  const years = (() => {
    const years = []
    for (let i = currentYear; i > currentYear - 100; i--) {
      years.push(i)
    }
    return years
  })()

  return (
    <>
      <Heading
        title="Main information"
        description="*The fields are mandatory"
        className="text-xl"
      />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Product name"
                  disabled={loading}
                  onRemove={() => field.onChange('')}
                  {...register('name')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormProductSelect
          fieldName="categoryId"
          loading={loading}
          label="Category"
          fieldOptions={categories}
        />
        <FormProductSelect
          fieldName="bodyTypeId"
          loading={loading}
          label="Body Type"
          fieldOptions={bodyTypes}
        />
        <FormProductSelect
          fieldName="makeId"
          loading={loading}
          label="Make"
          fieldOptions={makes}
        />
        <FormField
          control={control}
          name="modelId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <Select
                disabled={loading || !(choosedModels.length > 0)}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger {...register('modelId')}>
                    <SelectValue
                      defaultValue={field.value}
                      placeholder="Select a Model"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="overflow-y-auto max-h-64">
                  {choosedModels.length > 0 &&
                    choosedModels.map(({ id, label }) => (
                      <SelectItem key={id} value={id}>
                        {label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <Select
                disabled={loading}
                onValueChange={field.onChange}
                value={field.value ? String(field.value) : undefined}
                defaultValue={field.value ? String(field.value) : undefined}
              >
                <FormControl>
                  <SelectTrigger {...register('year')}>
                    <SelectValue
                      defaultValue={field.value}
                      placeholder="Set a production year"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="overflow-y-auto h-64">
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

        <FormProductSelect
          fieldName="regionId"
          loading={loading}
          label="Region"
          fieldOptions={regions}
        />

        <FormField
          control={control}
          name="cityId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <Select
                disabled={loading || !(choosedCity.length > 0)}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger {...register('cityId')}>
                    <SelectValue
                      defaultValue={field.value}
                      placeholder="Select a City"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="overflow-y-auto h-64">
                  {choosedCity.length > 0 &&
                    choosedCity.map(({ id, name }) => (
                      <SelectItem key={id} value={id}>
                        {name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="mileage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kilometers</FormLabel>
              <FormControl>
                <NumericFormat
                  thousandSeparator={true}
                  allowNegative={false}
                  decimalScale={0}
                  suffix={' ths km.'}
                  fixedDecimalScale={true}
                  valueIsNumericString={true}
                  disabled={loading}
                  placeholder="Set a kilometers"
                  customInput={Input}
                  value={field.value}
                  onValueChange={values => field.onChange(values.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormProductSelect
          fieldName="fuel"
          loading={loading}
          label="Fuel Type"
          fieldOptions={enumValues(FuelType)}
        />
        <FormProductSelect
          fieldName="gearbox"
          loading={loading}
          label="Gearbox Type"
          fieldOptions={enumValues(GearboxType)}
        />
        <FormProductSelect
          fieldName="typeOfDrive"
          loading={loading}
          label="Type Of Drive"
          fieldOptions={enumValues(TypeOfDriveOption)}
        />
        <FormProductSelect
          fieldName="colorId"
          loading={loading}
          label="Color"
          fieldOptions={colors}
        />
        <FormProductSelect
          fieldName="headlights"
          loading={loading}
          label="Headlights"
          fieldOptions={enumValues(Headlights)}
        />
        <FormProductSelect
          fieldName="spareTire"
          loading={loading}
          label="SpareTire"
          fieldOptions={enumValues(SpareTire)}
        />
        <FormProductSelect
          fieldName="interiorMatherial"
          loading={loading}
          label="Interior Matherial"
          fieldOptions={enumValues(InteriorMatherial)}
        />
      </div>
    </>
  )
}
export default FormMainInfo
