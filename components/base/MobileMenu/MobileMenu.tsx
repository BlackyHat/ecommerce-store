'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Menu, X } from 'lucide-react'

import { MainNav } from '@/components/base'
import { Logo } from '@/components/ui'

import { Button, IconButton } from '@/components/ui'
import { MobileMenuProps } from './types'

// import content from '@/data/common.json'

export const MobileMenu: React.FC<MobileMenuProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 border border-input text-secondary md:hidden"
      >
        <Menu size={20} />
      </Button>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          open={open}
          as="div"
          className="relative z-50 md:hidden"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex backdrop-blur-md">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-1"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-1200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-1"
            >
              <Dialog.Panel className="relative ml-auto flex size-full w-80 flex-col overflow-y-auto bg-white py-4 shadow-xl">
                <div className="flex items-center justify-start px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>

                <div
                  className="flex flex-col items-center justify-start gap-4 space-y-8 p-4"
                  onClick={onClose}
                >
                  <Logo />

                  <MainNav className="flex-col items-start justify-start gap-6" />

                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
