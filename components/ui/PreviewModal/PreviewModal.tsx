"use client";

import { Modal } from "@/components/ui/Modal";
import { Gallery } from "@/components/base/Gallery";
import { Info } from "@/components/base/Info";

import usePreviewModal from "@/hooks/use-preview-modal";

export const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="lg:gap-x-8 grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12">
        <div className="lg:col-span-5 sm:col-span-4">
          <Gallery images={product.images} />
        </div>
        <div className="lg:col-span-7 sm:col-span-8">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};
