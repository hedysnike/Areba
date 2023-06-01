import { Dialog, Transition } from "@headlessui/react";
import { Step, StepLabel, Stepper } from "@mui/material";
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

const steps = ['HELLO WORLD 1', 'HELLO WORLD 2', '3'];

export function SpecialistModal({ openModal, onClose }: { openModal: boolean; onClose: () => void }) {
  // const [active, setActive] = useState(0);

  // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Modal open={openModal} onClose={onClose}>
      <div className="z-30 flex flex-col items-center justify-center w-full text-black">
        <div className="w-full mt-3 ">
          {/* <Stepper
            color="#FF7600"
            sx={{
              ".mantine-Stepper-stepIcon": {
                backgroundColor: "#424242",
              },
            }}
            iconSize={24}
            completedIcon={
              <Icon className="bg-transparent" icon="material-symbols:check" color="#fff" width="14" height="14" />
            }
            progressIcon={
              <Icon
                className="w-6 h-6 p-[3px] rounded-full bg-transparent"
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
              completedIcon={<Icon className="" icon="material-symbols:check" color="#fff" width="14" height="14" />}
            >
              <h1 className="bg-[#FF7600] w-full text-center text-white pb-[14px] pt-[14px] text-sm outline-none">
                სპეციალისტის გამოძახება - 20 ლარი
              </h1>
              <div className="flex flex-col w-full overflow-hidden">
                <SpecialistModal1 />
                <div className="flex justify-start w-full px-6 mb-7">
                  <button className="bg-[#FF7600] text-white py-2 px-4 rounded flex text-sm" onClick={nextStep}>
                    <h1>გაგრძელება</h1>
                  </button>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="py-3">
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white pb-[14px] pt-[14px] text-sm outline-none">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="flex flex-col w-full overflow-hidden">
                  <SpecialistModal2 />
                  <div className="flex justify-start w-full px-6 mb-7">
                    <Buttons text="გაგრძელება" onClick={nextStep} />

                    <button className="p-2 ml-[10px] text-[#FF7600] text-sm" onClick={prevStep}>
                      <h1>უკან</h1>
                    </button>
                  </div>
                </div>
              </div>
            </Stepper.Step>
            <Stepper.Step className="px-2 py-3">
              <div>
                <h1 className="bg-[#FF7600] w-full text-center text-white pb-[14px] pt-[14px] text-sm outline-none">
                  სპეციალისტის გამოძახება - 20 ლარი
                </h1>
                <div className="ml-6 mr-[30px] overflow-hidden">
                  <SpecialistModal3 />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col mx-6 mt-3">
                    <div className="flex justify-start w-full text-xs">
                      <h2>დაეთანხმეთ წესებსა და პირობებს</h2>
                    </div>
                    <div className="flex justify-end w-full text-[12px] text-[#FF7600] hover:bg-[#FDF2E8] pt-[10px] pb-5 pr-3">
                      <h2>
                        <u>წესები და პირობები</u>
                      </h2>
                    </div>
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
          </Stepper> */}

          <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <div>gw</div>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <div>
            All steps completed - you&apos;re finished
          </div>
          <div>
            <div />
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      ) : (
        <div>
          <div>Step {activeStep + 1}</div>
          <div>
            <button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </button>
            <div />
            {isStepOptional(activeStep) && (
              <button color="inherit" onClick={handleSkip} >
                Skip
              </button>
            )}

            <button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      )}


          <div className="flex items-center justify-center m-2"></div>
        </div>
      </div>
    </Modal>
  );
}
