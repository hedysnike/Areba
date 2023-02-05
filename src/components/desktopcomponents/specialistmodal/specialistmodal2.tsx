import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { InputAutoComplete, InputText } from "../inputs";

const years = Array.from({ length: 50 }, (_, i) => 2023 - i);

export function SpecialistModal2() {
  return (
    <div className="flex flex-col w-full px-6 mb-6 animate-in slide-in-from-right">
      <div className="flex items-center justify-center ">
        <div className="w-[50%] mt-6 mb-5 pr-2 ">
          <InputAutoComplete label="აირჩიეთ მარკა" options={Makes.map((make) => make.title)} />
        </div>
        <div className="w-[50%] mt-6 mb-5">
          <InputAutoComplete label="აირჩიეთ მოდელი" options={Models.map((model) => model.title)} />
        </div>
      </div>
      <div className="flex justify-center w-full pb-2">
        <InputAutoComplete label="წელი" options={years.map((year) => year.toString())} />
      </div>
      <div className="relative my-2">
        <InputText label="მანქანის ნომერი" />
      </div>
      <div className="relative my-2">
        <InputText label="პრომო კოდი" />
      </div>
    </div>
  );
}
