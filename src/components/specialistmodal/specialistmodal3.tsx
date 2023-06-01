import * as React from "react";
import { Layout } from "@/hooks/Layout";
import { InputText } from "../inputs";

export function SpecialistModal3() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-6">
        <div className="relative rounded-[4px] mb-[20px] mr-[5px] p-[2px] w-[50%]">
          <InputText label="სახელი გვარი?" />
        </div>
        <div className="relative rounded-[4px] mb-[20px] ml-[5px] p-[2px] w-[50%]">
          <InputText label="პირადი ნომერი (ID)" />
        </div>
      </div>
      <div className="flex w-full ">
        <div className="relative rounded-[4px] mr-[5px] p-[2px] w-[50%]">
          <InputText label="მობილური" />
          <div className="text-xs text-[#757575] mt-[2px]">
            <h2>+995 (###) ### - ###</h2>
          </div>
        </div>
        <div className="relative rounded-[4px] ml-[5px] p-[2px] w-[50%]">
          <InputText label="ელ-ფოსტა" />
        </div>
      </div>
    </div>
  );
}

SpecialistModal3.Layout = Layout;
