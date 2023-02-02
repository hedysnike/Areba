import Link from "next/link";
import { Icon } from "@iconify/react";
import { SpecialistModal } from "../specialistmodal/specialistmodal";
import { useState } from "react";
import { LanguageMenu } from "./languagemodal";
import { Menuicon } from "./Menu";

export function Navigation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="border-b border-bottom">
      <SpecialistModal openModal={openModal} onClose={() => setOpenModal(false)} />
      <div className="lg:w-3/4 w-full max-w-6xl ml-auto mr-auto relative h-[50px]">
        <div className="absolute hidden p-1 pl-2 sm:block">
          <Link href="/">
            <img className="w-auto h-[43px] cursor-pointer " src="https://i.imgur.com/K5vhBw4.png" />
          </Link>
        </div>
        <div className="flex items-center justify-end h-full gap-2 text-sm text-[#616161]">
          <div
            onClick={() => setOpenModal(true)}
            className="hover:bg-[#F0F0F0] gap-2 h-full flex flex-col sm:flex-row items-center px-2 mr-2 cursor-pointer"
          >
            <Icon icon="fa-solid:hands-helping" width={30} height={30} color="616161" />
            <h1>სპეციალისტი</h1>
          </div>
          <Link className="hover:bg-[#F0F0F0] hidden gap-2 h-full sm:flex items-center px-2" href="/news">
          <Icon icon="fa-solid:newspaper" width={27} height={27} color="616161" />
            <h1>სიახლეები</h1>
          </Link>
          <Link href="/login">
            <button className="flex flex-col sm:flex-row sm:gap-[3px] items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FEF2E8] pt-[4px] pb-[7px] px-[14px] rounded-[4px]">
              <Icon icon="material-symbols:person" width={24} height={24} color="FF7600" />
              <h1 className="text-[#616161]">შესვლა</h1>
            </button>
          </Link>
          <div className="border-l border-[#bbbbbb] border-solid py-2 pl-4">
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
