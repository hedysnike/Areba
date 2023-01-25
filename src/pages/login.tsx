import { Layout } from "@/hooks/Layout";

export default function Login() {
    return (
      <div className="min-h-[84vh] h-full">
        <div className="w-3/4 mr-auto ml-auto h-full mt-5 border border-solid border-[#dcdcdcaf]">
            <div className="h-full flex text-center w-full border border-solid border-[#dcdcdcaf] text-lg">
          <div className="w-[50%] hover:bg-[#FDF2E8] text-[#FF7600] py-3">ავტორიზაცია</div>
          <div className="w-[50%] hover:bg-[#FDF2E8] text-[#FF7600] py-3">რეგისტრაცია</div>
          </div>
          <div className="grid grid-cols-1 h-full bg-white w-full">
            <input className="w-11/12 mr-auto ml-auto  bg-gray-300 border border-solid border-gray-600 outline-none p-3  mt-5" type="text" />
            <input className="w-11/12 mr-auto ml-auto  bg-gray-300 border border-solid border-gray-600 outline-none p-3  mt-5" type="text" />
            <input className="w-11/12 mr-auto ml-auto  bg-gray-300 border border-solid border-gray-600 outline-none p-3  mt-5" type="text" />

          </div>
        </div>
      </div>
    );
  }


Login.Layout = Layout;