import { City } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cities`;

const getCity = async (regionId: string): Promise<City> => {
  const res = await fetch(`${URL}/${regionId}`);
  return res.json();
};

export default getCity;
