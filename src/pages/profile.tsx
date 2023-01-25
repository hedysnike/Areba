import { Layout } from "@/hooks/Layout";

export default function Profile(){
    return (
        <div className="min-h-screen h-auto bg-[#E0E0E0] text-black">
            <div className="flex w-[75%] ml-auto mr-auto py-6">
            <div className="w-[26%] h-full bg-white min-h-[80vh] border-r border-solid border-opacity-20 border-black">
                <div className="text-black bg-[#F5F5F5] text-center text-xl py-2"> icon პირადი გვერდი</div>
                <div className="p-4 text-sm hover:bg-[#F5F5F5]">პირადი ინფორმაცია icon</div>
                <div className="p-4 text-sm hover:bg-[#F5F5F5]">ჩემი განცხადებები icon</div>
            </div>
            <div className="w-[74%] h-full bg-white min-h-[80vh]"> 
            <div className="bg-[#EEEEEE] p-4 text-sm shadow-b shadow-md shadow-[#b2b2b2]">Icon პირადი ინფორმაცია</div>
            <div className="">
                <div className="border border-solid border-black w-full p-3 text-sm mt-5">ქვეყანა</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
            </div>
            </div>
        </div>
    );
}

Profile.Layout = Layout;