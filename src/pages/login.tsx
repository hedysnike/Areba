import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";

export default function Login() {
  return (
    <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf]">
        <div className="h-auto">{LLogin()}</div>
        <div className="grid grid-cols-1 h-auto bg-white w-full">
          <div className="relative m-4 mb-16">
            <input
              type="text"
              className="pt-5 pb-2 pl-1 w-full font-normal peer text-sm leading-6 absolute outline-none border border-solid  border-[#C2C2C2] focus:border-2 hover:border hover:delay-[100ms] focus:transition-all hover:transition-all ease-in focus:border-black hover:border-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-1 pt-4 peer-focus:-translate-y-[11px] absolute pointer-events-none m-[1px]  transition-all text-base peer-focus:text-xs text-[#9b9b9b]  peer-focus:text-[#9b9b9b]">ელ ფოსტა *</label>
            <label className="absolute peer-placeholder-shown:text-transparent peer-placeholder-shown:delay-200 pointer-events-none z-20 text-[#9b9b9b] pl-1 pt-[5px] text-xs m-[1px] ">ელ ფოსტა *</label>
          </div>
          <div className="relative m-4 mb-16">
            <input
              type="text"
              className="pt-5 pb-2 pl-1 w-full font-normal peer text-sm leading-6 absolute outline-none border border-solid  border-[#C2C2C2] focus:border-2 hover:border hover:delay-[100ms] focus:transition-all hover:transition-all ease-in focus:border-black hover:border-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-1 pt-4 peer-focus:-translate-y-[11px] absolute pointer-events-none m-[1px]  transition-all text-base peer-focus:text-xs text-[#9b9b9b]  peer-focus:text-[#9b9b9b]">პაროლი *</label>
            <label className="absolute peer-placeholder-shown:text-transparent peer-placeholder-shown:delay-200 pointer-events-none z-20 text-[#9b9b9b] pl-1 pt-[5px] text-xs m-[1px] ">პაროლი *</label>
          </div>
          <div className="mt-20"></div>
        </div>
      </div>
    </div>
  );
}

Login.Layout = Layout;

// text-[#9CA3AF]
