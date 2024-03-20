"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  useForm,
  FormProvider,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NumericFormat } from "react-number-format";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { Trash } from "lucide-react";

import {
  AlertModal,
  Button,
  Heading,
  FormAdditionalInfo,
  FormMainInfo,
  FormContactInfo,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ImageUpload,
  Input,
  Separator,
  Textarea,
} from "@/components/ui";

import content from "@/data/car-form.json";

import { formSchema } from "./schema";

import { CarFormProps } from "./types";
import { defaultValues } from "./default";

export const CarForm: React.FC<CarFormProps> = ({
  initialData,
  categories,
  bodyTypes,
  makes,
  colors,
  regions,
}) => {
  const { title, desc, popupMsg, form } = content;
  const { formName, uploadImages, submitBtn, carDesc, carPrice } = form;

  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const methods = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ?? defaultValues,
  });

  const formTitle = initialData ? title.edit : title.create;
  const formDescription = initialData ? desc.edit : desc.create;
  const toastMessage = initialData ? popupMsg.edit : popupMsg.create;
  const buttonLabel = initialData ? submitBtn.edit : submitBtn.create;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/products/${params.productId}`,
          data,
        );
      } else {
        await axios.post(`/api/${params.storeId}/products`, data);
      }
      router.refresh();
      router.push(`/${params.storeId}/products`);
      toast.success(toastMessage);
    } catch (error) {
      toast.error(popupMsg.error);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `/api/stores/${params.storeId}/products/${params.productId}`,
      );
      router.refresh();
      router.push(`/${params.storeId}/products`);
      toast.success(popupMsg.delete);
    } catch (error) {
      toast.error(popupMsg.error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={formTitle} description={formDescription} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Trash className="size-4" />
          </Button>
        )}
      </div>

      <Separator />

      <FormProvider {...methods}>
        <form
          name={formName}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={methods.control}
            name={uploadImages.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{uploadImages.label}</FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={loading}
                    onTop={(url) => {
                      const idx = field.value.findIndex(
                        (element: { url: string }) => element.url === url,
                      );
                      if (idx !== -1) {
                        const elementToMove = field.value.splice(idx, 1)[0];
                        field.value.unshift(elementToMove);
                        field.onChange([...field.value]);
                      }
                    }}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter(
                          (current: { url: string }) => current.url !== url,
                        ),
                      ])
                    }
                    value={field.value.map(
                      (image: { url: string }) => image.url,
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormMainInfo
            loading={loading}
            categories={categories}
            bodyTypes={bodyTypes}
            makes={makes}
            colors={colors}
            regions={regions}
          />

          <Separator />

          <Heading
            title={carDesc.heading.title}
            description={carDesc.heading.desc}
            className="text-xl"
          />

          <div className="mr-auto max-w-4xl">
            <FormField
              control={methods.control}
              name={carDesc.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{carDesc.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={carDesc.placeholder}
                      className="h-[240px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <FormAdditionalInfo loading={loading} />

          <Separator />

          <Heading
            title={carPrice.heading.title}
            description={carPrice.heading.desc}
            className="text-xl"
          />

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <FormField
              control={methods.control}
              name={carPrice.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{carPrice.label}</FormLabel>
                  <FormControl>
                    <NumericFormat
                      thousandSeparator={true}
                      allowNegative={false}
                      decimalScale={0}
                      suffix={carPrice.suffix}
                      fixedDecimalScale={true}
                      valueIsNumericString={true}
                      disabled={loading}
                      placeholder={carPrice.placeholder}
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

          <Separator />

          <FormContactInfo loading={loading} />

          <Button
            disabled={loading}
            className="ml-auto"
            type="submit"
            size="lg"
            variant="outline"
          >
            {buttonLabel}
          </Button>
        </form>
      </FormProvider>
    </>
  );
};
