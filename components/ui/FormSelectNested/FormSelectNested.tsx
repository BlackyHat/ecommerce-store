"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

import { FormSelectNestedProps } from "./types";

export const FormSelectNested: React.FC<FormSelectNestedProps> = ({
  fieldName,
  label,
  placeholder,
  loading,
  fieldOptions,
}) => {
  const { register, control } = useFormContext();

  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            disabled={loading || !(fieldOptions.length > 0)}
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger {...register(fieldName)}>
                <SelectValue
                  defaultValue={field.value}
                  placeholder={placeholder}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-h-64 overflow-y-auto">
              {fieldOptions.length > 0 &&
                fieldOptions.map(({ id, label }) => (
                  <SelectItem key={id} value={id}>
                    {label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
