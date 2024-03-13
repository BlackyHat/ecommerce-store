'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Plus, X } from 'lucide-react'

import { Button, IconButton } from '@/components/ui'
import Filter from '../Filter/Filter'
import { MobileFiltersProps } from './types'

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  bodyTypes,
  colors,
}) => {
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-50 flex">
          <Dialog.Panel className=" relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter name="BodyTypes" data={bodyTypes} valueKey="bodyTypeId" />

              <Filter name="Colors" data={colors} valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
