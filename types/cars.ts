export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
  products: Product[];
}

export interface BodyType {
  id: string;
  label: string;
  imageUrl: string;
  products: Product[];
}

export interface Make {
  id: string;
  label: string;
  models: Model[];
  products: Product[];
}

export interface Model {
  id: string;
  label: string;
  make: Make;
  products: Product[];
}
export interface Region {
  id: string;
  name: string;
  cities: City[];
  products: Product[];
}

export interface City {
  id: string;
  name: string;
  region: Region;
  products: Product[];
}

export interface Product {
  id: string;

  images: Image[];
  name: string;
  category: Category;
  bodyType: BodyType;
  make: Make;
  model: Model;
  color: Color;

  year: number;
  mileage: number;
  fuel: FuelType;
  gearbox: GearboxType;
  typeOfDrive: TypeOfDriveOption;

  region: Region;
  city: City;
  headlights: Headlights;
  spareTire: SpareTire;
  interiorMatherial: InteriorMatherial;

  description: string;
  isFeatured: boolean;
  isArchived: boolean;

  engineSize: string | undefined;
  vinCode: string | undefined;
  isCrashed: boolean;
  airConditioner: boolean;
  androidAuto: boolean;
  heatedSteeringWheel: boolean;
  electricWindows: boolean;
  electricSideMirrors: boolean;
  electricSeatAdjustment: boolean;
  isofix: boolean;
  navigationSystem: boolean;
  seatVentilation: boolean;
  seatHeating: boolean;
  soundSystem: boolean;
  sportSeats: boolean;

  price: number;
  phone: string;
}

export interface Image {
  id: string;
  url: string;
  position: number;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export enum FuelType {
  DIESEL,
  PETROL,
  LPG,
  LPG_PETROL,
  GYBRID,
  ELECTRIC,
  HYDROGEN,
}

export enum GearboxType {
  AUTOMATIC,
  MANUAL,
}

export enum TypeOfDriveOption {
  ALL_WD,
  FWD,
  RWD,
}

export enum Headlights {
  HALOGEN,
  MATRIX,
  LED,
  LASER,
  XENON_BIXENON,
}

export enum SpareTire {
  FULL_SIZE,
  JOCKEY,
  REPAIR_KIT,
}

export enum InteriorMatherial {
  TEXTILE,
  LEATHER,
  VELOR,
  COMBINED,
  ECO_LEATHER,
  ALCANTARA,
}
