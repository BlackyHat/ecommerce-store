import { Modal } from '@/components/ui/modal';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

interface AlertModalProps {
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  loading,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      // title="Are you sure?"
      // description="This action cannot be undone."
      open={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
