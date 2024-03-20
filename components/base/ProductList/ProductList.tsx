import { NoResults, ProductCard } from "@/components/ui";

import { ProductListProps } from "./types";

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => (
  <div className="space-y-4">
    <h3 className="text-3xl font-bold">{title} </h3>

    {items.length === 0 && <NoResults />}

    <div className="lg:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  </div>
);
