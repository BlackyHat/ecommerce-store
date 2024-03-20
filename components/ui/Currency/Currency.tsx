'use client'

import { useEffect, useState } from 'react'

import { formatter } from '@/utils'

import { CurrencyProps } from './types'

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <p className="font-semibold">{formatter.format(Number(value))}</p>
}
