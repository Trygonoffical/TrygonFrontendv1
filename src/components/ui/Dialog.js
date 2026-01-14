"use client"
import { Fragment } from 'react'
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

const Dialog = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className = "",
  showCloseButton = true,
  closeOnOverlayClick = true 
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HeadlessDialog 
        as="div" 
        className="relative z-50" 
        onClose={closeOnOverlayClick ? onClose : () => {}}
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
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel 
                className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-left align-middle shadow-xl transition-all ${className}`}
              >
                {title && (
                  <div className="flex justify-between items-center mb-6">
                    <HeadlessDialog.Title
                      as="h3"
                      className="text-2xl font-semibold text-white"
                    >
                      {title}
                    </HeadlessDialog.Title>
                    {showCloseButton && (
                      <button
                        onClick={onClose}
                        className="text-white/70 hover:text-white text-2xl font-bold transition-colors"
                      >
                        ×
                      </button>
                    )}
                  </div>
                )}
                {children}
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  )
}

export default Dialog
