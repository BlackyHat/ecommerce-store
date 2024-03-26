import { z } from 'zod'

import content from '@/data/car-form.json'

import {
  FuelType,
  GearboxType,
  Headlights,
  InteriorMatherial,
  SpareTire,
  TypeOfDriveOption,
} from '@/types'

const { validation } = content.form
const {
  images,
  name,
  category,
  bodyType,
  make,
  model,
  year,
  region,
  city,
  spareTire,
  interiorMatherial,
  headlights,
  mileage,
  fuel,
  gearbox,
  typeOfDrive,
  color,
  description,
  engineSize,
  vinCode,
  phoneNumber,
  price,
} = validation

export const formSchema = z.object({
  //main required information

  images: z
    .object({ url: z.string() })
    .array()
    .refine(arr => !!arr.length, {
      message: images.minLength.message,
    }),
  name: z
    .string()
    .trim()
    .min(name.minLength.value, name.minLength.message)
    .max(name.maxLength.value, name.maxLength.message),

  categoryId: z
    .string()
    .min(category.minLength.value, category.minLength.message),

  bodyTypeId: z
    .string()
    .min(bodyType.minLength.value, bodyType.minLength.message),

  makeId: z.string().min(make.minLength.value, make.minLength.message),

  modelId: z.string().min(model.minLength.value, model.minLength.message),

  year: z.coerce
    .number()
    .min(year.minLength.value, year.minLength.message)
    .max(new Date().getFullYear(), year.maxLength.message),

  regionId: z.string().min(region.minLength.value, region.minLength.message),

  cityId: z.string().min(city.minLength.value, city.minLength.message),

  spareTire: z
    .nativeEnum(SpareTire, {
      errorMap: () => spareTire,
    })
    .optional(),

  interiorMatherial: z
    .nativeEnum(InteriorMatherial, {
      errorMap: () => interiorMatherial,
    })
    .optional(),
  headlights: z
    .nativeEnum(Headlights, {
      errorMap: () => headlights,
    })
    .optional(),

  //additional optional information

  mileage: z.coerce
    .number()
    .min(mileage.minLength.value, mileage.minLength.message)
    .max(mileage.maxLength.value, mileage.maxLength.message),

  fuel: z.nativeEnum(FuelType, {
    errorMap: () => fuel,
  }),

  gearbox: z.nativeEnum(GearboxType, {
    errorMap: () => gearbox,
  }),

  typeOfDrive: z.nativeEnum(TypeOfDriveOption, {
    errorMap: () => typeOfDrive,
  }),

  colorId: z.string().min(color.minLength.value, color.minLength.message),

  description: z
    .string()
    .min(description.minLength.value, description.minLength.message)
    .max(description.maxLength.value, description.maxLength.message),
  engineSize: z
    .string()
    .min(engineSize.minLength.value, engineSize.minLength.message)
    .optional()
    .nullable(),

  vinCode: z
    .string()
    .regex(RegExp(vinCode.format.reg), vinCode.format.message)
    .optional()
    .nullable(),
  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional(),
  isCrashed: z.boolean().default(false).optional(),
  airConditioner: z.boolean().default(false).optional(),
  androidAuto: z.boolean().default(false).optional(),
  heatedSteeringWheel: z.boolean().default(false).optional(),
  electricWindows: z.boolean().default(false).optional(),
  electricSideMirrors: z.boolean().default(false).optional(),
  electricSeatAdjustment: z.boolean().default(false).optional(),
  isofix: z.boolean().default(false).optional(),
  navigationSystem: z.boolean().default(false).optional(),
  seatVentilation: z.boolean().default(false).optional(),
  seatHeating: z.boolean().default(false).optional(),
  soundSystem: z.boolean().default(false).optional(),
  sportSeats: z.boolean().default(false).optional(),

  //contact required information

  price: z.coerce
    .number()
    .min(price.minLength.value, price.minLength.message)
    .max(price.maxLength.value, price.maxLength.message),

  phone: z
    .string()
    .regex(RegExp(phoneNumber.format.reg), phoneNumber.format.message),
})
