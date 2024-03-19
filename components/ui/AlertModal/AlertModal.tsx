'use client'

import { useEffect, useState } from 'react'

import { Button, Modal } from '@/components/ui'

import content from '@/data/common.json'

import { AlertModalProps } from './types'

export const AlertModal: React.FC<AlertModalProps> = ({
  loading,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const { alertModal } = content.popup

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          {alertModal.cancel}
        </Button>

        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          {alertModal.continue}
        </Button>
      </div>
    </Modal>
  )
}
