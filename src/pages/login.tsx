import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";

export default function Login() {
  return (
    <div className="min-h-[84vh] h-full bg-[#FFFDF7]">
      <div className="w-3/4 px-44 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
        <div className="h-auto">{LLogin()}</div>
        <div className="grid w-full h-auto grid-cols-1 bg-white">
          <div className="relative rounded-[4px] group m-4 pb-16">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              ელ ფოსტა *
            </label>
          </div>

          <div className="relative pb-16 m-4 group">
            <input
              type="text"
              className="pt-5 rounded-md pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-black hover:ring-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />
            <label className="pl-2 pt-3 text-xs -translate-y-[10px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#9b9b9b] absolute pointer-events-none z-20">
              პაროლი *
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.Layout = Layout;

// text-[#9CA3AF]
