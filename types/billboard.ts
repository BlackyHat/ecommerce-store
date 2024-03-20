import { Billboard as BillboardType } from "@/types";

export interface BillboardProps {
  data: BillboardType & { name?: string };
}
