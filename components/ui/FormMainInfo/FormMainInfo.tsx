"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { NumericFormat } from "react-number-format";

import { FormSelectYear } from "../FormSelectYear";
import { FormSelectNested } from "../FormSelectNested";

import {
  Heading,
  FormProductSelect,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
  Input,
} from "@/components/ui";

import content from "@/data/car-form.json";
import { enumValues } from "@/utils/enumValues";

import {
  City,
  FuelType,
  GearboxType,
  Headlights,
  InteriorMatherial,
  Model,
  SpareTire,
  TypeOfDriveOption,
} from "@/types";

import { ProductFormProps } from "./types";

export const FormMainInfo: React.FC<ProductFormProps> = ({
  loading,
  categories,
  bodyTypes,
  makes,
  colors,
  regions,
}) => {
  const { register, watch, control } = useFormContext();
  const { title, desc, inputs, selects } = content.form.mainInfo;
  const { userName, mileage } = inputs;

  const [choosedModels, setChoosedModels] = useState<Model[]>([]);
  const [choosedCity, setChoosedCity] = useState<City[]>([]);

  const selectedMakeId = watch("makeId");

  useEffect(() => {
    if (selectedMakeId) {
      const [choosedMake] = makes.filter(({ id }) => id === selectedMakeId);
      setChoosedModels(choosedMake?.models.sort());
    }
  }, [selectedMakeId, makes]);

  const selectedRegionId = watch("regionId");

  useEffect(() => {
    if (selectedRegionId) {
      const [choosedRegion] = regions.filter(
        ({ id }) => id === selectedRegionId,
      );
      setChoosedCity(choosedRegion?.cities);
    }
  }, [selectedRegionId, regions]);

  const getOptions = (name: string) => {
    if (name === "categoryId") {
      return categories;
    }
    if (name === "bodyTypeId") {
      return bodyTypes;
    }
    if (name === "makeId") {
      return makes;
    }
    if (name === "modelId") {
      return choosedModels;
    }
    if (name === "regionId") {
      return regions;
    }
    if (name === "cityId") {
      return choosedCity;
    }
    if (name === "fuel") {
      return enumValues(FuelType);
    }
    if (name === "gearbox") {
      return enumValues(GearboxType);
    }
    if (name === "typeOfDrive") {
      return enumValues(TypeOfDriveOption);
    }
    if (name === "colorId") {
      return colors;
    }
    if (name === "headlights") {
      return enumValues(Headlights);
    }
    if (name === "spareTire") {
      return enumValues(SpareTire);
    }
    if (name === "interiorMatherial") {
      return enumValues(InteriorMatherial);
    }
    return [];
  };

  return (
    <>
      <Heading title={title} description={desc} className="text-xl" />

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <FormField
          control={control}
          name={userName.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{userName.label}</FormLabel>
              <FormControl>
                <Input
                  placeholder={userName.placeholder}
                  disabled={loading}
                  onRemove={() => field.onChange("")}
                  {...register(userName.name)}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selects.map((select) => {
          if (select.name === "year") {
            return (
              <FormSelectYear
                key={select.id}
                fieldName={select.name}
                label={select.label}
                placeholder={select.placeholder}
                loading={loading}
              />
            );
          } else if (select.nested) {
            return (
              <FormSelectNested
                key={select.id}
                fieldName={select.name}
                loading={loading}
                label={select.label}
                placeholder={select.placeholder}
                fieldOptions={getOptions(select.name)}
              />
            );
          } else {
            return (
              <FormProductSelect
                key={select.id}
                fieldName={select.name}
                loading={loading}
                label={select.label}
                placeholder={select.placeholder}
                fieldOptions={getOptions(select.name)}
              />
            );
          }
        })}

        <FormField
          control={control}
          name={mileage.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{mileage.label}</FormLabel>
              <FormControl>
                <NumericFormat
                  thousandSeparator={true}
                  allowNegative={false}
                  decimalScale={0}
                  suffix={mileage.suffix}
                  fixedDecimalScale={true}
                  valueIsNumericString={true}
                  disabled={loading}
                  placeholder={mileage.placeholder}
                  customInput={Input}
                  value={field.value}
                  onValueChange={(values) => field.onChange(values.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};
