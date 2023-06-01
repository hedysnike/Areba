import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { SpecialistModal1 } from "./specialistmodal1";
import { SpecialistModal2 } from "./specialistmodal2";
import { SpecialistModal3 } from "./specialistmodal3";
import { Stepper } from "@mantine/core";
import { Icon } from "@iconify/react";
import { Buttons } from "../buttons";
import { Switch } from "@mui/material";
import Link from "next/link";

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
              <Dialog.Panel className="w-full max-w-md text-left text-white align-middle transition-all transform bg-white rounded-md shadow-xl md:max-w-[700px]">
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
  const [lastStep, setLastStep] = useState<number | null>(null);

  const nextStep = () => {
    setLastStep(active);
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () => {
    setLastStep(active);
    setActive((current) => (current > 0 ? current - 1 : current));
  };


  const getAnimationClass = () => {
    if (lastStep === null){ return ''};
    return active > lastStep ? 'slide-in-from-right' : 'slide-in-from-left';
  };

  console.log(active)
  console.log(lastStep)

  return (
    <Modal open={openModal} onClose={onClose}>
      <div className="z-30 flex flex-col items-center justify-center w-full text-black">
        <div className="w-full mt-3 ">
          <Stepper
            color="#FF7600"
            iconSize={24}
            completedIcon={
              <Icon  icon="material-symbols:check" color="#fff" width="14" height="14" />}
            progressIcon={
              <div className="h-full w-full bg-[#3E4428] rounded-full flex items-center justify-center">
              <Icon
                icon="ic:sharp-edit"
                color="#fff"
                width="14"
                height="14"
                />
                </div>}
            active={active}
            onStepClick={setActive}
          >
            <Stepper.Step
              className="py-3 pl-5"
            >
              <h1 className="bg-[#FF7600] w-full text-center text-white pb-[14px] pt-[14px] text-sm outline-none">
                სპეციალისტის გამოძახება - 20 ლარი
              </h1>
              <div className="flex flex-col w-full overflow-hidden">
                <div className={`duration-300 animate-in ${getAnimationClass()}`}>
                <SpecialistModal1 />
                </div>
                <div className="flex justify-start w-full px-6 mb-7">
                  <button className="bg-[#FF7600] text-white py-2 px-4 rounded flex text-sm" onClick={nextStep}>
                    <h1>გაგრძელება</h1>
                  </button>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="py-3" icon={
            <div className="bg-[#9E9E9E] w-full rounded-full flex items-center justify-center h-full">
              <Icon icon="mdi:paper" color="white"/>
            </div>
               }>
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white pb-[14px] pt-[14px] text-sm outline-none">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="flex flex-col w-full overflow-hidden">
                <div className={`duration-300 animate-in ${getAnimationClass()}`}>
                  <SpecialistModal2 />
                  </div>
                  <div className="flex justify-start w-full px-6 mb-7">
                    <Buttons text="გაგრძელება" onClick={nextStep} />

                    <button className="p-2 ml-[10px] text-[#FF7600] text-sm" onClick={prevStep}>
                      <h1>უკან</h1>
                    </button>
                  </div>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="px-2 py-3"
            icon={
              <div className="bg-[#9E9E9E] w-full rounded-full flex items-center justify-center h-full">
            <Icon icon="mdi:account-outline" color="white" />
              </div>
                 }>
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white pb-[14px] pt-[14px] text-sm outline-none">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="ml-6 mr-[30px] overflow-hidden">
                <div className={`duration-300 animate-in ${getAnimationClass()}`}>
                  <SpecialistModal3 />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col mx-6 mt-3">
                  <div className="flex items-center text-xs">
                <Switch    />
                დაეთანხმე წესებს და პირობებს
                  </div>
                    <Link href="/terms" className="flex justify-end w-full text-[12px] text-[#FF7600] hover:bg-[#FDF2E8] pt-[10px] pb-5 pr-3">
                      <h2>
                        <u>წესები და პირობები</u>
                      </h2>
                    </Link>
                  </div>
                  <div className="flex justify-start w-full px-6 mb-7">
                    <button className="bg-[#FF7600] text-white p-2 rounded mt-7 flex text-sm" onClick={onClose}>
                      <h1>შეკვეთის გაფორმება</h1>
                    </button>
                    <button className="p-2 ml-2 mt-7 text-[#FF7600] text-sm" onClick={prevStep}>
                      <h1>უკან</h1>
                    </button>
                  </div>
                </div>
              </div>
            </Stepper.Step>
          </Stepper>
        </div>
      </div>
    </Modal>
  );
}
