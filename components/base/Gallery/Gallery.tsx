'use client'

import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { GalleryTab } from '@/components/ui'

import { GalleryProps } from './types'

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <GalleryTab key={idx} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-square w-full">
        {images.map((image, idx) => (
          <Tab.Panel key={idx}>
            <div className="relative aspect-square size-full overflow-hidden sm:rounded-lg">
              <Image
                className="object-cover object-center"
                src={image.url}
                alt="Image"
                fill
                priority
                sizes="(max-width: 1279px) 100vw, (min-width: 1280px) 592px"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
