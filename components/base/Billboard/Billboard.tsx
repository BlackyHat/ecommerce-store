import { BillboardProps } from "@/types";

export const Billboard: React.FC<BillboardProps> = ({ data }) => (
  <div className="lg:py-8 overflow-hidden rounded-xl py-4 sm:py-6">
    <div
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
      className="relative aspect-square overflow-hidden rounded-xl bg-cover bg-bottom md:aspect-[2.4/1]"
    >
      <div className="flex size-full flex-col items-center justify-center gap-y-8 text-center">
        <p className="lg:text-6xl text-3xl font-bold text-white backdrop-blur-sm sm:max-w-md sm:text-5xl">
          {data.name || data.label}
        </p>
      </div>
    </div>
  </div>
);
