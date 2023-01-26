import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";

export default function Register() {
    return (
      <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf]">
      <div className="h-auto"> {LLogin()}</div>
        <div className="grid grid-cols-1 h-auto bg-white w-full">
          <input className="mx-6  bg-white border border-solid border-[#C2C2C2] outline-none px-3 pb-1 pt-6 rounded text-sm mt-5" type="text" />
          <input className="mx-6  bg-white border border-solid border-[#C2C2C2] outline-none px-3 pb-1 pt-6 rounded text-sm mt-5" type="text" />
          <input className="mx-6  bg-white border border-solid border-[#C2C2C2] outline-none px-3 pb-1 pt-6 rounded text-sm mt-5" type="text" />
          <input className="mx-6  bg-white border border-solid border-[#C2C2C2] outline-none px-3 pb-1 pt-6 rounded text-sm mt-5" type="text" />
          <input className="mx-6  bg-white border border-solid border-[#C2C2C2] outline-none px-3 pb-1 pt-6 rounded text-sm mt-5" type="text" />
          <input className="mx-6  bg-white border border-solid border-[#C2C2C2] outline-none px-3 pb-1 pt-6 rounded text-sm mt-5" type="text" />
          </div>
        </div>
      </div>
    );
  }

Register.Layout = Layout;