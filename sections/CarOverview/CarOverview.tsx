import { Gallery, Info, ProductList } from "@/components/base";

import { CarOverviewProps } from "./types";

export const CarOverview: React.FC<CarOverviewProps> = ({
  productsList,
  product,
}) => (
  <section className="section">
    <div className="container">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <Gallery images={product.images} />

        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <Info data={product} />
        </div>
      </div>
      <hr className="my-10" />

      <ProductList title="Related Items" items={productsList} />
    </div>
  </section>
);
