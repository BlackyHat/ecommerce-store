"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { ImagePlus, Trash, Zap } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";

import content from "@/data/common.json";

import { ImageUploadProps } from "./types";

export const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  onTop,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { uploadImages } = content.buttons;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (results: unknown) => {
    const result = results as { info?: { secure_url?: string } };
    if (result.info && result.info.secure_url) {
      onChange(result.info.secure_url);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative h-[150px] w-[375px] overflow-hidden rounded-md"
          >
            <div className="absolute right-2 top-2 z-10 flex gap-x-2">
              {onTop && (
                <Button
                  type="button"
                  onClick={() => onTop(url)}
                  variant="secondary"
                  size="icon"
                >
                  <Zap className="size-4" />
                </Button>
              )}

              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="size-4" />
              </Button>
            </div>

            <Image
              fill
              className="object-cover"
              alt="Car preview image"
              src={url}
              sizes="(max-width: 375px) 100vw, 33vw"
              priority={true}
            />
          </div>
        ))}
      </div>

      <CldUploadWidget onUpload={onUpload} uploadPreset="xp9oubjg">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              type="button"
              disabled={disabled}
              variant="outline"
              onClick={onClick}
            >
              <ImagePlus className="mr-2 size-4" />
              {uploadImages.label}
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
