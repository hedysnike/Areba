import { Layout } from "@/hooks/Layout";

export default function Chat() {
  return (
    <div className="h-full min-h-[93vh] pt-5 bg-[#E0E0E0] ">
      <div className="w-3/4 max-w-6xl ml-auto mr-auto rounded-md shadow shadow-[#1d1d1d81] overflow-hidden">
        <div className="flex">
          <div className="flex h-auto w-[299px] shrink-0 bg-white">
            User
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="h-[80vh] flex flex-col w-full">
            <div className="bg-[#EEEEEE] w-full h-[50px] drop-shadow-md shadow-black">eagae</div>
            <div>aega</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

Chat.Layout = Layout;
