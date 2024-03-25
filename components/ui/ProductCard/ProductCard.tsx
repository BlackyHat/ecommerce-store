'use client'

import { MouseEventHandler } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Expand, Star } from 'lucide-react'

import { Currency, IconButton } from '@/components/ui'

import usePreviewModal from '@/hooks/use-preview-modal'

import { ProductCardProps } from './types'

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal()

  const onPreview: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    //remove this
  }

  return (
    <div className="group relative cursor-pointer space-y-4 rounded-xl border bg-white p-3">
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          alt={data.name}
          src={data.images?.[0]?.url}
          fill
          className="aspect-square rounded-md object-cover"
          sizes="(max-width: 767px) 100vw, (min-width: 1280px) 33wv,  (min-width: 1280px) 29.px"
        />

        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} />}
              className="z-10 text-gray-600"
            />

            <IconButton
              onClick={onAddToCart}
              icon={<Star size={20} />}
              className="z-10 text-gray-600"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{data.name}</p>

        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>

      <Link
        className="absolute inset-0 !m-0"
        href={`/${data.id}`}
        aria-label={data.name}
      />
    </div>
  )
}
