import Link from "next/link";
import { Icon } from "@iconify/react";
import { SpecialistModal } from "../specialistmodal/specialistmodal";
import { useState } from "react";
import { LanguageMenu } from "./languagemodal";
import { Menuicon } from "./Menu";
import { ProfileMenu } from "./profilemenu";
import { useUser } from "@/hooks/useUser";

export function Navigation() {
  const [openModal, setOpenModal] = useState(false);
  const { user, isLoggedIn } = useUser();

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
          {isLoggedIn ? (
            <div></div>
          ) : (
            <Link href="/login">
              <button className="flex flex-col sm:flex-row sm:gap-[3px] items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FEF2E8] pt-[4px] pb-[7px] px-[14px] rounded-[4px]">
                <Icon icon="material-symbols:person" width={24} height={24} color="FF7600" />
                <h1 className="text-[#616161]">შესვლა</h1>
              </button>
            </Link>
          )}

          <hr className="h-10 w-[1px] bg-[#bbbbbb] mr-2" />

          {!isLoggedIn ? (
            <div></div>
          ) : user?.role === "Buyer" ? (
            <>
              <ProfileMenu href1="/add" href2="/requests" first="დამატება" second="ჩემი მოთხოვნები" />
              <Link href="/add">
                <button className="flex  px-[13px] text-white flex-col sm:flex-row bg-[#FF7600] sm:gap-2 items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FD8824] py-[6px] rounded-[4px]">
                  <Icon icon="material-symbols:add-circle" color="white" width="24" height="24" />
                  <h1>დამატება</h1>
                </button>
              </Link>
              <hr className="h-10 w-[1px] ml-2 bg-[#bbbbbb]" />
            </>
          ) : user?.role === "Seller" ? (
            <>
              <ProfileMenu href1="/allrequests" href2="/settings" first="მოთხოვნები" second="პარამეტრები" />
              <Link href="/allrequests">
                <button className="flex  px-[13px] text-white flex-col sm:flex-row bg-[#FF7600] sm:gap-2 items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FD8824] py-[6px] rounded-[4px]">
                  <Icon icon="material-symbols:add-circle" color="white" width="24" height="24" />
                  <h1>მოთხოვნები</h1>
                </button>
              </Link>
              <hr className="h-10 w-[1px] ml-2 bg-[#bbbbbb]" />
            </>
          ) : user?.role === "Admin" ? (
            <div>Admin Page</div>
          ) : null}

          <div className="flex py-2">
            {isLoggedIn ? (
              <div className="ml-2 mr-[20px]">
                <Link href="/requests">
                  <Icon icon="ic:baseline-message" color="#616161" width="24" height="24" />
                </Link>
              </div>
            ) : (
              <div></div>
            )}
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
