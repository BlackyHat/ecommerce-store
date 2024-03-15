'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CldUploadWidget } from 'next-cloudinary'
import { ImagePlus, Trash, Zap } from 'lucide-react'

import { Button } from '@/components/ui/Button/Button'
import { ImageUploadProps } from './types'


export const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  onTop,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map(url => (
          <div
            key={url}
            className="relative w-[375px] h-[150px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2 flex gap-x-2">
              {onTop && (
                <Button
                  type="button"
                  onClick={() => onTop(url)}
                  variant="secondary"
                  size="icon"
                >
                  <Zap className="w-4 h-4" />
                </Button>
              )}

              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="w-4 h-4" />
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
            open()
          }
          return (
            <Button
              type="button"
              disabled={disabled}
              variant="outline"
              onClick={onClick}
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}
