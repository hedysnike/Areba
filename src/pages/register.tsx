import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";

export default function Register() {
    return (
      <div className="min-h-[84vh] h-full">
        <div className="w-3/4 mr-auto ml-auto h-full mt-5 border border-solid border-[#dcdcdcaf]">
        {LLogin()}
          <div className="grid grid-cols-1 h-full bg-white w-full">
            <input className="w-11/12 mr-auto ml-auto  bg-gray-300 border border-solid border-gray-600 outline-none p-3  mt-5" type="text" />
            <input className="w-11/12 mr-auto ml-auto  bg-gray-300 border border-solid border-gray-600 outline-none p-3  mt-5" type="text" />
            <input className="w-11/12 mr-auto ml-auto  bg-gray-300 border border-solid border-gray-600 outline-none p-3  mt-5" type="text" />
  
          </div>
        </div>
      </div>
    );
  }

Register.Layout = Layout;