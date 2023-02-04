import Link from "next/link";
import { Icon } from "@iconify/react";
import { SpecialistModal } from "../specialistmodal/specialistmodal";
import { useState } from "react";
import { LanguageMenu } from "./languagemodal";
import { Menuicon } from "./Menu";
import { ProfileMenu } from "./profilemenu";

export function NavigationLogged() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="border-b">
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
            <h1 className="ml-[2px]">სიახლეები</h1>
          </Link>
          <div className="border-l border-[#bbbbbb] border-solid py-[18px] mx-2"></div> 
          <ProfileMenu />
          <Link href="/add">
            <button className="flex px-[13px] text-white flex-col sm:flex-row bg-[#FF7600] sm:gap-2 items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FD8824] py-[6px] rounded-[4px]">
              <Icon icon="material-symbols:add-circle" color="white" width="24" height="24" />
              <h1>დამატება</h1>
            </button>
          </Link>

          <div className="border-l border-[#bbbbbb] border-solid py-2 ml-2 flex">
            <div className="ml-2 mr-[20px]">
              <Icon icon="ic:baseline-message" color="#616161" width="24" height="24" />
            </div>
            <LanguageMenu />
          </div>
          <div className="p-2">
            <Menuicon />
          </div>
        </div>
      </div>
    </div>
  );
}
