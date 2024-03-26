'use client'

import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { cn } from '@/utils'

import { GalleryTabProps } from './types'

export const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => (
  <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
    {({ selected }) => (
      <div>
        <span className="absolute inset-0 aspect-square size-full overflow-hidden rounded-md">
          <Image
            className="object-cover object-center"
            src={image.url}
            alt={`Picture of the car`}
            loading="lazy"
            fill
            sizes="(max-width: 1279px) 150px, (min-width: 1280px) 130px"
          />
        </span>
        <span
          className={cn(
            'absolute inset-0 rounded-md ring-2 ring-offset-2',
            selected ? 'ring-black' : 'ring-transparent',
          )}
        />
      </div>
    )}
  </Tab>
)
