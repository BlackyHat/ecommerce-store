import React from 'react'

import { SelectItem } from '@/components/ui/Select/Select'

import { FieldOptions } from './form-product-select'

interface SelectedItemsProps {
  options: (string | FieldOptions)[]
}

const SelectedItems: React.FC<SelectedItemsProps> = ({ options }) => {
  return options.map(option => {
    if (typeof option === 'string') {
      return (
        <SelectItem
          key={option}
          value={option.toUpperCase()}
          className="capitalize"
        >
          {option.toLowerCase()}
        </SelectItem>
      )
    } else {
      return (
        <SelectItem key={option.id} value={option.id} className="capitalize">
          {option.label || option.name}
        </SelectItem>
      )
    }
  })
}
export default SelectedItems
