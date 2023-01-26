import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";

export default function Login() {
  return (
    <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf]">
        <div className="h-auto">{LLogin()}</div>
        <div className="grid grid-cols-1 h-auto bg-white w-full">
          <div className="relative group m-4 mb-16">
            <input
              type="text"
              className="pt-6 pb-2 pl-1 w-full font-normal peer text-sm leading-6 absolute outline-none border border-solid border-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />

            <label className="pl-1 pt-2 absolute pointer-events-none peer-placeholder-shown:translate-y-4 peer-placeholder-shown:z-0 z-20 text-black m-[1px] text-xs peer-placeholder-shown:text-base">ელ ფოსტა *</label>
            <label className="pl-1 absolute pointer-events-none peer-focus:bg-white pt-6 text-transparent m-[1px] z-1">ელ ფოსტა *</label>
            <label className="pl-1 pt-2 absolute pointer-events-none peer-focus:text-black m-[1px] text-transparent peer-placeholder-shown:text-transparent z-1 text-xs">ელ ფოსტა *</label>
          </div>
          <div className="relative group m-4">
            <input
              type="text"
              className="pt-6 pb-2 pl-1 w-full font-normal peer text-sm leading-6 absolute outline-none border border-solid border-black placeholder-shown:z-0 z-20"
              placeholder=" "
            />

            <label className="pl-1 pt-2 absolute pointer-events-none peer-placeholder-shown:translate-y-5 peer-placeholder-shown:z-0 z-20 text-black m-[1px] text-xs">პაროლი *</label>
            <label className="pl-1 absolute pointer-events-none peer-focus:bg-white pt-6 text-transparent m-[1px] z-1">პაროლი *</label>
            <label className="pl-1 pt-2 absolute pointer-events-none peer-focus:text-black m-[1px] text-transparent peer-placeholder-shown:text-transparent z-1 text-xs">პაროლი *</label>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.Layout = Layout;

// text-[#9CA3AF]
