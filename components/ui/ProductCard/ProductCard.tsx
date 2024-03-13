'use client'

import { MouseEventHandler } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Expand, ShoppingCart } from 'lucide-react'

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
    <div className="bg-white relative group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt={data.name}
          src={data.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
          sizes="(max-width: 767px) 100vw, (min-width: 1280px) 33wv,  (min-width: 1280px) 29.px"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} />}
              className="text-grey-600 z-10"
            />

            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} />}
              className="text-grey-600 z-10"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semi-bold text-lg">{data.name}</p>

        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>

      <Link
        className="absolute inset-0 !m-0"
        href={`/car/${data.id}`}
        aria-label={data.name}
      />
    </div>
  )
}
