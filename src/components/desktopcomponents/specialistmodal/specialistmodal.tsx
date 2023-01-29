import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Stepper } from "@mantine/core";
import { Icon } from "@iconify/react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Combobox } from "@headlessui/react";
import { Makes } from "@/assets/makes";
import { SpecialistModal2 } from "./specialistassistant2";
import { SpecialistModal1 } from "./specialistmodal1";
import { SpecialistModal3 } from "./specialistmodal3";

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
              <Dialog.Panel className="w-full max-w-md text-left text-white align-middle transition-all transform bg-white rounded-md shadow-xl md:max-w-2xl">
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
  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Modal open={openModal} onClose={onClose}>
      <div className="z-30 flex flex-col items-center justify-center w-full text-black">
        <div className="w-full mt-3 ">
          <Stepper
            iconSize={24}
            color="#ff7600"
            completedIcon={
              <Icon className="bg-[#transparent]" icon="material-symbols:check" color="#fff" width="14" height="14" />
            }
            progressIcon={
              <Icon
                className="bg-[#424242] w-6 h-6 p-[3px] rounded-full"
                icon="ic:sharp-edit"
                color="#fff"
                width="14"
                height="14"
              />
            }
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
          >
            <Stepper.Step
              className="py-3 pl-5"
              color="#424242"
              completedIcon={
                <Icon className="bg-[#transparent]" icon="material-symbols:check" color="#fff" width="14" height="14" />
              }
            >
              <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm outline-none">
                სპეციალისტის გამოძახება - 20 ლარი
              </h1>

              <div className="flex flex-col w-full">
                <SpecialistModal1 />
                <div className="flex justify-start w-full px-4 mb-7">
                  <button className="bg-[#FF7600] text-white p-2 rounded mt-7 flex text-sm" onClick={nextStep}>
                    <h1>გაგრძელება</h1>
                  </button>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="py-3 pr-5">
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm mb-">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="flex flex-col w-full px-4">
                  <SpecialistModal2 />
                  <div className="flex justify-start w-full px-4 mb-7">
                    <button className="bg-[#FF7600] text-white p-2 rounded mt-7 flex text-sm" onClick={nextStep}>
                      <h1>გაგრძელება</h1>
                    </button>
                    <button className="p-2 ml-2 mt-7 text-[#FF7600] text-sm" onClick={prevStep}>
                      <h1>უკან</h1>
                    </button>
                  </div>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="px-2 py-3">
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="m-4">
                  <SpecialistModal3 />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-start w-full px-4 mb-7">
                    <button className="bg-[#FF7600] text-white p-2 rounded mt-7 flex text-sm" onClick={nextStep}>
                      <h1>გაგრძელება</h1>
                    </button>
                    <button className="p-2 ml-2 mt-7 text-[#FF7600] text-sm" onClick={prevStep}>
                      <h1>უკან</h1>
                    </button>
                  </div>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Completed>
              <div className="flex justify-center w-full px-16 text-center">
                მალე ჩვენი ოპერატორი დაგიკავშირდებათ .!
              </div>
            </Stepper.Completed>
          </Stepper>
          <div className="flex items-center justify-center m-2"></div>
        </div>
      </div>
    </Modal>
  );
}
