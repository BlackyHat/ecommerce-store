"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";

import { Button, IconButton, Filter } from "@/components/ui";

import content from "@/data/common.json";

import { MobileFiltersProps } from "./types";

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  bodyTypes,
  colors,
}) => {
  const [open, setOpen] = useState(false);

  const { filters } = content;

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="lg:hidden flex items-center gap-x-2">
        {filters.label} <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="lg:hidden relative z-50"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-25" />

        <div className="fixed inset-0 z-50 flex">
          <Dialog.Panel className=" relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
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
  );
};
