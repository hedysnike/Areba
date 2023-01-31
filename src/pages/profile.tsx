import { Layout } from "@/hooks/Layout";
import { Layoutlogged } from "@/hooks/Layoutlogged";
import { Icon } from "@iconify/react";

export default function Profile() {
  return (
    <div className="min-h-screen h-auto bg-[#E0E0E0] text-black">
      <div className="flex w-[75%] ml-auto mr-auto py-6">
        <div className="w-[26%] h-full bg-white min-h-[80vh] border-r border-solid border-opacity-20 border-black">
            <div className="flex-row flex items-center bg-[#F5F5F5] py-[8px]">
            <Icon icon="ic:baseline-person" color="#FF7600" width="35" height="35" className="p-2 bg-white rounded-full " />
            <h1 className="pl-4">პირადი ინფორმაცია</h1>
          </div>
          <div className="p-4 text-sm hover:bg-[#F5F5F5]">პირადი ინფორმაცია icon</div>
          <div className="p-4 text-sm hover:bg-[#F5F5F5]">ჩემი განცხადებები icon</div>
        </div>
        <div className="w-[74%] h-full bg-white min-h-[80vh]">
          <div className="bg-[#EEEEEE] px-4 py-[9px] text-sm shadow-b flex items-center shadow-md shadow-[#b2b2b2]">
            <Icon icon="ic:baseline-person" color="black" width="32" height="32" />{" "}
            <h2 className="pl-4">პირადი ინფორმაცია</h2>
          </div>
          <div className="">
            <div className="w-full p-3 mt-5 text-sm border border-black border-solid">ქვეყანა</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.Layout = Layoutlogged;
