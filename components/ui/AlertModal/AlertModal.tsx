"use client";

import { useEffect, useState } from "react";

import { Button, Modal } from "@/components/ui";

import content from "@/data/common.json";

import { AlertModalProps } from "./types";

export const AlertModal: React.FC<AlertModalProps> = ({
  loading,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { alertModal } = content.popup;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          {alertModal.cancel}
        </Button>

        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          {alertModal.continue}
        </Button>
      </div>
    </Modal>
  );
};
