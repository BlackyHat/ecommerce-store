import { ShoppingCart } from 'lucide-react'

import { Button, Currency } from '@/components/ui'

import content from '@/data/common.json'

import { InfoProps } from './types'

export const Info: React.FC<InfoProps> = ({ data }) => {
  const { button, props } = content.infoSection

  const labels: Record<string, string | undefined> = {
    Category: data.category.name,
    'Body Type': data.bodyType.label,
    Make: data.make.label,
    Model: data.model.label,
    Color: data.color.name,
  }

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
        {props.map(prop => (
          <li key={prop} className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black capitalize">{prop}:</h3>

            <p>{labels[prop]}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          {button.label} <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}
