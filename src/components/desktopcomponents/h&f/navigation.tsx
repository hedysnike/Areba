import Link from "next/link";
import { Icon } from "@iconify/react";
import { SpecialistModal } from "../specialistmodal/specialistmodal";
import { useState } from "react";
import { LanguageMenu } from "./languagemodal";
import { Menuicon } from "./Menu";
import { ProfileMenu } from "./profilemenu";
import { useUser } from "@/hooks/useUser";
import { Drawer } from "@mantine/core";

export function Navigation() {
  const [openModal, setOpenModal] = useState(false);
  const { user, isLoggedIn } = useUser();
  const [opened, setOpened] = useState(false);


  return (
    <>
      <SpecialistModal openModal={openModal} onClose={() => setOpenModal(false)} />

      
      <div className="bg-white h-[50px] fixed w-full lg:hidden">
      <Drawer opened={opened} onClose={() => setOpened(false)} size="65%" withCloseButton={false}>
        <div className="w-full">
          <div className="flex flex-col items-center w-full h-auto">

            <div  className="h-[150px] w-full bg-cover bg-center overflow-hidden bg-[url('https://areba.ge/images/bg-l-t.jpg')] flex items-center justify-center">
          {isLoggedIn ? (
                          <Link href="/profile" className="flex flex-row text-white">
                            <div className="my-[2px] mx-4">
                            <div className="p-3 bg-white rounded-full">
        <Icon icon="material-symbols:person" color="#FF7600" width="21" height="21" />
                            </div>
                            </div>
              <div className="flex flex-col">
                <div className="text-">ჩემი გვერდი</div><div className="text-sm">{user?.name} {user?.surname}</div>
                </div>
            </Link>
          ) : (
            <Link href="/login" >
              <button className="bg-[#FF7600] py-2 px-4 shadow-md shadow-[#00000077]  text-white flex text-sm items-center rounded outline-none"><Icon icon="ic:baseline-person" color="white" width="24" height="24" /> ავტორიზაცია</button>             
               </Link>
          )}
</div>
            <div className="flex flex-col items-center w-full h-auto">
            {isLoggedIn ? ( <div className="w-full">
            <div className="flex flex-col text-text-base font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] gap-y-4 w-full py-5 pl-2"><div className="flex gap-5">
            <Icon icon="ic:outline-plus" width={24} height={24} className="text-[#616161] " /><h1 className="text-sm"> დამატება</h1> </div><div className="flex gap-5">                <Icon icon="mdi:clipboard-outline" width={24} height={24} className="text-[#616161] " />
 <h1 className="text-sm">ჩემი მოთხოვნები</h1></div></div>
            <div className="flex items-center gap-5 font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-3 pl-2">            <Icon icon="material-symbols:person" className="w-6 h-6 text-[#FF7600]" />
<h1 className="text-sm">პროფილი</h1></div>
            <div className="flex items-center gap-5 font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-3 pl-2">              <Icon icon="ic:baseline-logout" width={24} height={24} className="text-[#616161] " />
<h1 className="text-sm">გასვლა</h1></div>


              <div className="text-text-base font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-5 pl-2">ქართული</div>
                        <div className="flex w-full py-5 pl-2 text-sm text-black fomt-semibold">ჩვენს შესახებ</div>
                        <div className="flex w-full pl-2 text-sm text-black fomt-semibold">კონტაქტი</div>
            </div>
                      ) : (
                        <div>
                                                  <div className="text-base text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-5 pl-2">ქართული</div>
                        <div className="flex w-full py-5 pl-2 text-sm text-black fomt-semibold">ჩვენს შესახებ</div>
                        <div className="flex w-full pl-2 text-sm text-black fomt-semibold">კონტაქტი</div>

                        </div>
            
                        )}


            </div>
          </div>
        </div>
      </Drawer>

      <div className="flex items-center w-full h-full">
        <Icon
          onClick={() => setOpened(true)}
          className="ml-2 opacity-20"
          icon="material-symbols:menu-rounded"
          color="black"
          width="25"
          height="25"
        />
        <img className="w-auto h-[35px] ml-4 cursor-pointer" src="https://i.imgur.com/K5vhBw4.png" />
      </div>
    </div>


    <div className="border-b">
      <div className="xl:w-3/4 w-full max-w-6xl ml-auto mr-auto relative h-[50px] hidden lg:block">
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
    </>
  );
}
