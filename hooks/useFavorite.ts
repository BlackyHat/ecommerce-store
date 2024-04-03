import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/types'

interface ICarsFavs {
  items: Product[]
  isFavorite: (id: string) => boolean
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

const useFavorite = create(
  persist<ICarsFavs>(
    (set, get) => ({
      items: [],
      isFavorite: (id: string) => {
        const currentItems = get().items
        const existingItem = currentItems.find(item => item.id === id)
        return existingItem ? true : false
      },

      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find(item => item.id === data.id)

        if (existingItem) {
          return toast('Item already in favorite')
        }

        set({ items: [...get().items, data] })
        toast.success('Item added to favorite')
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter(item => item.id !== id)] })
        toast.success('Item removed from the favorite')
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'favorite-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useFavorite
