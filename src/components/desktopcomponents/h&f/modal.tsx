import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface ModalProps1 {
  opeen: boolean;
  onClosee: () => void;
  children: React.ReactNode;
}

function MyModal({ opeen, onClosee, children }: ModalProps1) {
  return (
    <Transition appear show={opeen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClosee}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full md:max-w-2xl max-w-md shadow-xl  transform overflow-hidden bg-white text-left text-white align-middle transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
