"use client";

import { useFormContext } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import {
  Heading,
  Checkbox,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  FormItem,
  Input,
} from "@/components/ui";

import content from "@/data/car-form.json";

import { FormAdditionalInfoProps } from "./types";

export const FormAdditionalInfo: React.FC<FormAdditionalInfoProps> = ({
  loading,
}) => {
  const { control } = useFormContext();
  const { title, desc, checkboxes, inputs } = content.form.additionalInfo;

  return (
    <>
      <Heading title={title} description={desc} className="text-xl" />
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <FormField
          control={control}
          name={inputs.engine.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{inputs.engine.label}</FormLabel>
              <FormControl>
                <PatternFormat
                  format={inputs.engine.format}
                  patternChar="%"
                  disabled={loading}
                  placeholder={inputs.engine.placeholder}
                  mask="_"
                  customInput={Input}
                  value={field.value}
                  onValueChange={(values) =>
                    field.onChange(values.formattedValue)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={inputs.vincode.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{inputs.vincode.label}</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  placeholder={inputs.vincode.placeholder}
                  onChange={field.onChange}
                  onRemove={() => field.onChange("")}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {checkboxes.map((checkbox) => (
          <FormField
            key={checkbox.id}
            control={control}
            name={checkbox.name}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <div className="space-y-1 leading-none">
                  <FormLabel>{checkbox.label}</FormLabel>

                  <FormDescription>{checkbox.desc}</FormDescription>
                </div>
              </FormItem>
            )}
          />
        ))}
      </div>
    </>
  );
};
