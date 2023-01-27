import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Stepper } from "@mantine/core";
import { Icon } from "@iconify/react";

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
              <Dialog.Panel className="w-full md:max-w-2xl max-w-md shadow-xl  transform overflow-hidden bg-white text-left text-white align-middle rounded-md transition-all">
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
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Modal open={openModal} onClose={onClose}>
      <div className="text-black flex flex-col items-center justify-center w-full z-30">
        <div className="w-full mt-3 ">
          <Stepper
            iconSize={24}
            color="#ff7600"
            completedIcon={
              <Icon className="bg-[#transparent]" icon="material-symbols:check" color="#fff" width="14" height="14" />
            }
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
          >
            <Stepper.Step className="pl-5 py-3">
              <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm">
                სპეციალისტის გამოძახება - 20 ლარი
              </h1>

              <div className="flex flex-col w-full">
                <div className="relative rounded-[4px] group m-4 pb-11">
                  <input
                    type="text"
                    className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                    placeholder=" "
                  />
                  <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                    ჩაწერეთ რისი გაკეთება გსურთ მანქანაზე?
                  </label>
                </div>
                <div className="relative rounded-[4px] group m-4 pb-11">
                  <input
                    type="text"
                    className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                    placeholder=" "
                  />
                  <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                    ჩაწერეთ სად მოვიდეს სპეციალისტი
                  </label>
                </div>
                <div className="w-full flex ">
                  <div className="relative rounded-[4px] group m-4 mr-0 pb-12 w-[60%]">
                    <input
                      type="text"
                      className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                      placeholder=" "
                    />
                    <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                      წელი/თვე/რიცხვი
                    </label>
                  </div>
                  <div className="relative rounded-[4px] group m-4 ml-2  pb-12 w-[40%]">
                    <input
                      type="text"
                      className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                      placeholder=" "
                    />
                    <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                      საათი:წუთი
                    </label>
                  </div>{" "}
                </div>
                <div className="justify-start px-4 mb-7 w-full">
                  <button className="bg-[#FF7600] text-white p-2 rounded mt-7 flex" onClick={nextStep}>
                    <h1>გაგრძელება</h1>
                  </button>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="px-2 py-3">
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="flex flex-col w-full">
                  <div className="relative rounded-[4px] group m-4 pb-11">
                    <input
                      type="text"
                      className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                      placeholder=" "
                    />
                    <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                      ჩაწერეთ რისი გაკეთება გსურთ მანქანაზე?
                    </label>
                  </div>
                  <div className="relative rounded-[4px] group m-4 pb-11">
                    <input
                      type="text"
                      className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                      placeholder=" "
                    />
                    <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                      ჩაწერეთ სად მოვიდეს სპეციალისტი
                    </label>
                  </div>
                  <div className="w-full flex ">
                    <div className="relative rounded-[4px] group m-4 mr-0 pb-12 w-[60%]">
                      <input
                        type="text"
                        className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                        placeholder=" "
                      />
                      <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                        წელი/თვე/რიცხვი
                      </label>
                    </div>
                    <div className="relative rounded-[4px] group m-4 ml-2  pb-12 w-[40%]">
                      <input
                        type="text"
                        className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                        placeholder=" "
                      />
                      <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                        საათი:წუთი
                      </label>
                    </div>{" "}
                  </div>
                  <div className="justify-start px-4 mb-7 w-full flex">
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
            <Stepper.Step className="pr-5 py-3">
            <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white py-3 text-sm">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="flex flex-col w-full">
                  <div className="relative rounded-[4px] group m-4 pb-11">
                    <input
                      type="text"
                      className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                      placeholder=" "
                    />
                    <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                      ჩაწერეთ რისი გაკეთება გსურთ მანქანაზე?
                    </label>
                  </div>
                  <div className="relative rounded-[4px] group m-4 pb-11">
                    <input
                      type="text"
                      className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                      placeholder=" "
                    />
                    <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                      ჩაწერეთ სად მოვიდეს სპეციალისტი
                    </label>
                  </div>
                  <div className="w-full flex ">
                    <div className="relative rounded-[4px] group m-4 mr-0 pb-12 w-[60%]">
                      <input
                        type="text"
                        className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                        placeholder=" "
                      />
                      <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                        წელი/თვე/რიცხვი
                      </label>
                    </div>
                    <div className="relative rounded-[4px] group m-4 ml-2  pb-12 w-[40%]">
                      <input
                        type="text"
                        className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
                        placeholder=" "
                      />
                      <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                        საათი:წუთი
                      </label>
                    </div>{" "}
                  </div>
                  <div className="justify-start px-4 mb-7 w-full flex">
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
            <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
          </Stepper>
          <div className="flex items-center justify-center m-2"></div>
        </div>
      </div>
    </Modal>
  );
}
