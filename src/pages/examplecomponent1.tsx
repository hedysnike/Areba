import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Layout } from "@/hooks/Layout";
import { Makes } from "@/assets/makes";


export default function ExampleComponent1() {
  const [selected, setSelected] = useState(Makes[0]);
  const [query, setQuery] = useState("");

  const filteredMakes =
    query === ""
      ? Makes
      : Makes.filter((make) =>
          make.title.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="fixed top-16 w-72">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border border-black focus:ring-0"
              displayValue={(make) => make.title}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon icon="material-symbols:10k" color="black" width="20" height="20" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                          >
                            <Icon icon="material-symbols:10k" color="white" width="20" height="20" />{" "}
                          </span>
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
  );
}
