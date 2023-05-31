import { Icon } from "@iconify/react";
import Link from "next/link";

export function MobileBottom() {
  return (
    <div className="bg-white bottom-0 fixed w-full h-[58px] border-t border-black border-opacity-10 border-solid">
        <div className="flex opacity-90 w-[89%] ml-auto mr-auto h-full">
        <div className="w-[16%] flex items-center justify-center">
        <div className="bg-[#838383] rounded-full p-[9px]">
          <Link href="/" >
        <Icon icon="ic:round-home" color="white" width="25" height="25" />
          </Link>
        </div>
          </div>
          <div className="w-[17%] flex items-center justify-center">
            <div className="bg-[#838383] rounded-full p-[9px]">
            <Link href="/profile" >
        <Icon icon="material-symbols:person" color="white" width="25" height="25" />
            </Link>
            </div>
          </div>
          <div className="w-[34%] flex justify-center items-center">
            <div className="w-auto bg-[#FF7600] p-[9px] rounded-full">
            <Link href="/add" >
        <Icon icon="material-symbols:add" color="white" width="25" height="25" />
            </Link>
            </div>
          </div>
          <div className="w-[17%] flex items-center justify-center">
          <div className="bg-[#838383] rounded-full p-[9px]">
          <Link href="/requests" >
        <Icon icon="ic:baseline-message" color="white" width="25" height="25" />
            </Link>
            </div>
          </div>
          <div className="w-[16%] flex items-center justify-center">
          <div className="bg-[#838383] rounded-full p-[9px]">
          <Link href="/" >
        <Icon icon="fluent:building-shop-20-filled" color="white" width="25" height="25" />
          </Link>
          </div>
          </div>
        </div>
    </div>
  );
}
