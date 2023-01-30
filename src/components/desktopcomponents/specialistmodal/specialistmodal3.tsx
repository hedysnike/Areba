import * as React from "react";
import { Layout } from "@/hooks/Layout";

export function SpecialistModal3() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-6">
        <div className="relative rounded-[4px] group mb-[34px] mr-[5px] pb-11 w-[50%]">
          <input
            type="text"
            className="pt-5 rounded-[4px] pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-out focus:ring-[#383838] hover:ring-[#383838] placeholder-shown:z-0 z-20"
            placeholder=" "
          />
          <h2 className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
            სახელი გვარი
          </h2>
        </div>
        <div className="relative rounded-[4px] group mb-[34px] ml-[5px] pb-11 w-[50%]">
          <input
            type="text"
            className="pt-5 rounded-[4px] pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-out focus:ring-[#383838] hover:ring-[#383838] placeholder-shown:z-0 z-20"
            placeholder=" "
          />
          <h2 className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
            პირადი ნომერი (ID)
          </h2>
        </div>
      </div>
      <div className="flex w-full ">
        <div className="relative rounded-[4px] group mr-[5px] pb-11 w-[50%]">
          <input
            type="text"
            className="pt-5 rounded-[4px] pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-out focus:ring-[#383838] hover:ring-[#383838] placeholder-shown:z-0 z-20"
            placeholder=" "
          />
          <h2 className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
            მობილური
          </h2>
        </div>
        <div className="relative rounded-[4px] group ml-[5px] pb-11 w-[50%]">
          <input
            type="text"
            className="pt-5 rounded-[4px] pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-out focus:ring-[#383838] hover:ring-[#383838] placeholder-shown:z-0 z-20"
            placeholder=" "
          />
          <h2 className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
            ელ-ფოსტა
          </h2>
        </div>
      </div>
    </div>
  );
}

SpecialistModal3.Layout = Layout;
