import Link from "next/link";
import { Icon } from "@iconify/react";
import { SpecialistModal } from "./specialistmodal";
import { useState } from "react";
import { LanguageMenu } from "./languagemodal"; 
import { Menuicon } from "./Menu";

export function Navigation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="border-b border-bottom">
      <SpecialistModal openModal={openModal} onClose={() => setOpenModal(false)} />
      <div className="w-full max-w-6xl ml-auto mr-auto relative h-[50px]">
        <div className="pl-2 p-1 absolute hidden sm:block">
          <Link href="/">
            <img className="w-auto h-[43px] cursor-pointer " src="https://i.imgur.com/K5vhBw4.png" />
          </Link>
        </div>
        <div className="flex h-full items-center text-sm justify-end text-black gap-2">
          <div
            onClick={() => setOpenModal(true)}
            className="hover:bg-[#F0F0F0] gap-2 h-full flex flex-col sm:flex-row items-center px-2 mr-2 cursor-pointer"
          >
            <Icon icon="fa-solid:hands-helping" className="text-zinc-600 h-8 w-8" />
            <h1>სპეციალისტი</h1>
          </div>
          <Link className="hover:bg-[#F0F0F0] hidden gap-2 h-full sm:flex items-center px-2" href="/news">
            <Icon icon="fa-solid:newspaper" className="text-zinc-600 h-8 w-8" />
            <h1>სიახლეები</h1>
          </Link>
          <Link href="/login">
            <button className="flex flex-col sm:flex-row  sm:gap-2 items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FEF2E8] py-[6px] px-2 rounded-[4px]">
            <Icon icon="material-symbols:person" className="text-orange-500 h-6 w-6" />
            <h1>შესვლა</h1>
            </button>
            </Link>
          <div className="border-l border-[#bbbbbb] border-solid py-2 px-4 ml-2">
            <LanguageMenu />
          </div>
          <div className="p-2 ml-2">
          <Menuicon />
          </div>
        </div>
      </div>
    </div>
  );
}
