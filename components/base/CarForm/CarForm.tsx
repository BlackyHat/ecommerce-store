'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  useForm,
  FormProvider,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NumericFormat } from 'react-number-format'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import * as z from 'zod'
import { Trash } from 'lucide-react'

import {
  AlertModal,
  Button,
  Heading,
  FormAdditionalInfo,
  FormMainInfo,
  FormContactInfo,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ImageUpload,
  Input,
  Separator,
  Textarea,
} from '@/components/ui'

import content from '@/data/car-form.json'

import { formSchema } from './schema'

import { CarFormProps } from './types'
import { defaultValues } from './default'

export const CarForm: React.FC<CarFormProps> = ({
  initialData,
  categories,
  bodyTypes,
  makes,
  colors,
  regions,
}) => {
  const { title, desc, popupMsg, buttonLabel, form } = content
  const { formName, uploadImages, inputs, textarea, checkbox, submitBtn } = form

  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ?? defaultValues,
  })

  const formTitle = initialData ? title.edit : title.create
  const formDescription = initialData ? desc.edit : desc.create
  const toastMessage = initialData ? popupMsg.edit : popupMsg.create
  const action = initialData ? form.submitBtn.edit : form.submitBtn.create

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      setLoading(true)
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/products/${params.productId}`,
          data
        )
      } else {
        await axios.post(`/api/${params.storeId}/products`, data)
      }
      router.refresh()
      router.push(`/${params.storeId}/products`)
      toast.success(toastMessage)
    } catch (error) {
      toast.error(popupMsg.error)
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(
        `/api/stores/${params.storeId}/products/${params.productId}`
      )
      router.refresh()
      router.push(`/${params.storeId}/products`)
      toast.success(popupMsg.delete)
    } catch (error) {
      toast.error(popupMsg.error)
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={formTitle} description={formDescription} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Separator />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={methods.control}
            name={uploadImages.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{uploadImages.label}</FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={loading}
                    onTop={url => {
                      const idx = field.value.findIndex(
                        (element: { url: string }) => element.url === url
                      )
                      if (idx !== -1) {
                        const elementToMove = field.value.splice(idx, 1)[0]
                        field.value.unshift(elementToMove)
                        field.onChange([...field.value])
                      }
                    }}
                    onChange={url => field.onChange([...field.value, { url }])}
                    onRemove={url =>
                      field.onChange([
                        ...field.value.filter(
                          (current: { url: string }) => current.url !== url
                        ),
                      ])
                    }
                    value={field.value.map((image: { url: any }) => image.url)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormMainInfo
            loading={loading}
            categories={categories}
            bodyTypes={bodyTypes}
            makes={makes}
            colors={colors}
            regions={regions}
          />

          <Separator />

          <Heading
            title={textarea.heading.title}
            description={textarea.heading.desc}
            className="text-xl"
          />

          <div className="max-w-4xl mr-auto">
            <FormField
              control={methods.control}
              name={textarea.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{textarea.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={textarea.placeholder}
                      className="resize-none h-[240px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <FormAdditionalInfo loading={loading} />

          <Separator />

          <Heading
            title="Cost of the car"
            description="Enter the price of the car"
            className="text-xl"
          />

          <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8">
            <FormField
              control={methods.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <NumericFormat
                      thousandSeparator={true}
                      allowNegative={false}
                      decimalScale={0}
                      suffix={' $'}
                      fixedDecimalScale={true}
                      valueIsNumericString={true}
                      disabled={loading}
                      placeholder="Set a price"
                      customInput={Input}
                      value={field.value}
                      onValueChange={values => field.onChange(values.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <FormContactInfo loading={loading} />

          <Button
            disabled={loading}
            className="ml-auto"
            type="submit"
            size="lg"
            variant="outline"
          >
            {action}
          </Button>
        </form>
      </FormProvider>
    </>
  )
}
