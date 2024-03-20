import { Billboard } from "@/components/base";

import { BillboardProps } from "@/types";

export const Hero: React.FC<BillboardProps> = ({ data }) => {
  return (
    <section>
      <div className="container">
        <Billboard data={data} />
      </div>
    </section>
  );
};
