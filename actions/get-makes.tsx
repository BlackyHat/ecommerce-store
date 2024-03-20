import { Make } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/makes`;

const getMakes = async (): Promise<Make[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getMakes;
