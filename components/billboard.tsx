import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
  data: BillboardType & { name?: string }
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="relative rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-bottom"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <p className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-md text-white backdrop-blur-sm">
            {data.name || data.label}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Billboard
