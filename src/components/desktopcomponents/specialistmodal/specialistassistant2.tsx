import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Combobox, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment, useState } from "react";

const years = Array.from({ length: 50 }, (_, i) => 2023 - i);

export function SpecialistModal2() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<typeof Makes[0]>();
  const [selectedModel, setSelectedModel] = useState<typeof Models[0]>();
  const [selectedYear, setSelectedYear] = useState<typeof years[0]>();

  const filteredMakes =
    query === ""
      ? Makes
      : Makes.filter((make) =>
          make.title.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredModels = Models.filter((model) => model.make_id === selected?._id).filter((model) =>
    model.title.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  );

  const filteredYears = years.filter((year) => year.toString().includes(query));

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-[50%] pr-1 pl-4 h-14">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full text-sm text-left bg-white rounded-lg shadow-md cursor-default ">
                <Combobox.Input
                  className="pt-5 rounded-[2px] pb-[7px] w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border border-black  focus:ring-0"
                  displayValue={(m: typeof Makes[0]) => m.title}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder=" "
                />
                <label className="left-0 pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                  აირჩიეთ მარკა
                </label>

                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <Icon icon="ic:baseline-arrow-drop-down" color="black" width="20" height="20" />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-96 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredMakes.length === 0 && query !== "" ? (
                    <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">Nothing found.</div>
                  ) : (
                    filteredMakes.map((make) => (
                      <Combobox.Option
                        key={make.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={make}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                              {make.title}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              ></span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div className="w-[50%] pr-4 pl-1">
          <Combobox value={selectedModel} onChange={setSelectedModel}>
            <div className="relative mt-1">
              <div className="relative w-full overflow-hidden text-sm text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                <Combobox.Input
                  className=" pt-5 rounded-[2px] pb-[7px] w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border border-black focus:ring-0"
                  displayValue={(m: typeof Models[0]) => m.title}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <label className="left-0 pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
                  აირჩიეთ მოდელი
                </label>

                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <Icon icon="ic:baseline-arrow-drop-down" color="black" width="20" height="20" aria-hidden="true" />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-96 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredModels.length === 0 && query !== "" ? (
                    <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">Nothing found.</div>
                  ) : (
                    filteredModels.map((model) => (
                      <Combobox.Option
                        key={model.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={model}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                              {model.title}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              ></span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>

      <div className="flex justify-center w-full px-4 pb-2 selectedYear-center">
        <Combobox value={selectedYear} onChange={setSelectedYear}>
          <div className="relative w-full mt-1">
            <div className="w-full text-sm text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
              <Combobox.Input
                className="w-full py-2 pt-5 rounded-[2px] pb-[7px] text-sm leading-5 text-gray-900 border border-black focus:ring-0"
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <Icon icon="ic:baseline-arrow-drop-down" color="black" width="20" height="20" aria-hidden="true" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-96 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredYears.length === 0 && query !== "" ? (
                  <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">Nothing found.</div>
                ) : (
                  filteredYears.map((model) => (
                    <Combobox.Option
                      key={model}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={model}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{model}</span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
      <div className="relative m-4 group pb-11">
        <input
          type="text"
          className="pt-5 rounded-[2px] pb-[7px] pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
          placeholder=" "
        />
        <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
          მანქანის ნომერი
        </label>
      </div>
      <div className="relative m-4 group pb-11">
        <input
          type="text"
          className="pt-5 rounded-[2px] pb-[7px] pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
          placeholder=" "
        />
        <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
          პრომო კოდი
        </label>
      </div>

      <div className="flex w-full "></div>
    </div>
  );
}
