import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


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

export function SpecialistModal({ openModal, onClose }: { openModal: boolean; onClose: () => void }) {
  return (
    <Modal open={openModal} onClose={onClose}>
      <div className="mb-3 text-black flex flex-col items-center justify-center w-full">
        Icon 1
        Icon 2
        Icon 3
        <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm">სპეციალისტის გამოძახება - 20 ლარი</h1>
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="mt-6 mx-9 p-2 border border-solid border-black border-opacity-80"
            placeholder="ჩაწერეთ რისი გაკეთება გსურთ მანქანაზე?"
          />
          <input
            type="text"
            className="mt-6 mx-9 p-2 border border-solid border-black border-opacity-80"
            placeholder="ჩაწერეთ სად მოვიდეს სპეციალისტი"
          />        </div>
            <div className="w-full">
          <input
            type="text"
            className="mt-6 mx-9 py-2 border border-solid border-black border-opacity-80 w-[290px]"
            placeholder="წელი/თვე/რიცხვი"
          />
          <input type="text" className="mt-6 mx-9 py-2 border border-solid border-black border-opacity-80 w-[183px]" placeholder=" საათი:წუთი" />
          </div>
          <div className="justify-start px-9 mb-7 w-full">
        <button className="bg-[#FF7600] text-white p-2 rounded mt-10 flex" ><h1>გაგრძელება</h1></button>
        </div>
      </div>
    </Modal>
  );
}

