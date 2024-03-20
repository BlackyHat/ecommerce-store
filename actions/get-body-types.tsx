import { BodyType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/bodyTypes`;

const getBodyTypes = async (): Promise<BodyType[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getBodyTypes;
