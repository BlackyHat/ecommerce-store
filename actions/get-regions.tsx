import { Region } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/regions`;

const getRegions = async (): Promise<Region[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getRegions;
