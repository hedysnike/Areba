import { Buttons } from "@/components/desktopcomponents/buttons";
import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";
import { useState } from "react";
import * as api from "@/lib/api";
import { useUser } from "@/hooks/useUser";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { retry } = useUser();

  const register = () => {
    api.register(email, password).then(retry);
  };

  return (
    <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf]">
        <div className="h-auto"> {LLogin()}</div>
        <div className="grid w-full h-auto grid-cols-1 bg-white">
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              ქვეყანა *
            </label>
          </div>
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              ქალაქი *
            </label>
          </div>
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              სახელი *
            </label>
          </div>
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              გვარი *
            </label>
          </div>
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              მობილური *
            </label>
          </div>
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              პაროლი *
            </label>
          </div>
          <Buttons text="რეგისტრაცია" onClick={register} />
        </div>
      </div>
    </div>
  );
}

Register.Layout = Layout;
