import {
  BodyType,
  Category,
  City,
  Color,
  Image,
  Make,
  Model,
  Product,
  Region,
} from "@/types";

export interface CarFormProps {
  initialData: (Product & { images: Pick<Image, "url">[] }) | null;
  categories: Category[];
  bodyTypes: BodyType[];
  makes: (Make & { models: Model[] })[];
  colors: Color[];
  regions: (Region & { cities: City[] })[];
}
