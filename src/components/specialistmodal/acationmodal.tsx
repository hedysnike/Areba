import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ open, onClose, children }: ModalProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md text-left text-white align-middle transition-all transform bg-[#1D1D1D] rounded-md shadow-xl md:max-w-[400px]">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

interface Props {
  openModal: boolean;
  onClose: () => void;
  onClick: any;
}
  
export function ActionModal({ openModal, onClose, onClick }: Props) {
  return (
    <Modal open={openModal} onClose={onClose}>
      <div className="z-30 flex flex-col w-full pt-5 text-white">
        <div className="flex justify-start px-4 mb-4 text-xl font-semibold">Confirm</div>
        <div className="flex justify-start px-4 text-sm font-semibold">Are you Sure You want to do this?</div>
        <div className="flex justify-end gap-1 px-2 mt-6 mb-2">
          <button className="text-[#FFC107] text-sm hover:bg-[#3D3829] px-[10px] pt-[6px] pb-[10px] rounded-sm" onClick={(e) => onClose()}>
            <h1>CANCEL</h1>
          </button>
          <button className="text-[#FFC107] text-sm hover:bg-[#3D3829] px-[22px] pt-[6px] pb-[10px] rounded-sm" onClick={() => {onClick(); onClose();}}>
            <h1>OK</h1>
          </button>
        </div>
      </div>
    </Modal>
  );
}
