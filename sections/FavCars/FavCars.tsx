'use client'

import { ProductCard } from '@/components/ui'
import useFavorite from '@/hooks/useFavorite'

import content from '@/data/common.json'

export const FavCars: React.FC = () => {
  const { favsTitle, noFavs } = content.userProfile
  const favoriteCars = useFavorite()

  return (
    <section className="section bg-slate-100">
      <div className="container ">
        <h2 className="mb-10 p-10 text-center">{favsTitle}</h2>

        {favoriteCars.items.length > 0 ? (
          <ul className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {favoriteCars.items.map(item => (
              <ProductCard key={item.id} data={item} />
            ))}
          </ul>
        ) : (
          <p>{noFavs}</p>
        )}
      </div>
    </section>
  )
}
