'use client'

import React from 'react'

import Currency from '@/components/ui/currency'
import { Button } from '@/components/ui/button'

import { Product } from '@/types'

import { ShoppingCart } from 'lucide-react'

interface InfoProps {
  data: Product
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>

      <hr className="my-4" />

      <ul className="flex flex-col gap-y-6">
        <li className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Category:</h3>

          <p>{data.category.name}</p>
        </li>

        <li className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Body Type:</h3>

          <p>{data.bodyType.label}</p>
        </li>

        <li className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Make:</h3>

          <p>{data.make.label}</p>
        </li>

        <li className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Model:</h3>

          <p>{data.model.label}</p>
        </li>

        <li className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>

          <p>{data.color.name}</p>
        </li>
      </ul>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}

export default Info
