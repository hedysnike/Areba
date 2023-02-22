import { useUser } from "@/hooks/useUser";
import { Icon } from "@iconify/react";
import { Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export function MobileTop() {
  const [opened, setOpened] = useState(false);
  const { user, isLoggedIn } = useUser();

  return (
    <div className="bg-white h-[50px] fixed w-full">
      <Drawer opened={opened} onClose={() => setOpened(false)} size="65%" withCloseButton={false}>
        <div className="w-full">
          <div className="flex items-center flex-col w-full h-auto">

            <div  className="h-[150px] w-full bg-cover bg-center overflow-hidden bg-[url('https://areba.ge/images/bg-l-t.jpg')] flex items-center justify-center">
          {isLoggedIn ? (
                          <Link href="/profile" className="flex flex-row text-white">
                            <div className="my-[2px] mx-4">
                            <div className="rounded-full bg-white p-3">
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
            <div className="flex flex-col h-auto items-center w-full">
            {isLoggedIn ? ( <div className="w-full">
            <div className="flex flex-col text-text-base font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] gap-y-4 w-full py-5 pl-2"><div className="flex gap-5">
            <Icon icon="ic:outline-plus" width={24} height={24} className="text-[#616161] " /><h1 className="text-sm"> დამატება</h1> </div><div className="flex gap-5">                <Icon icon="mdi:clipboard-outline" width={24} height={24} className="text-[#616161] " />
 <h1 className="text-sm">ჩემი მოთხოვნები</h1></div></div>
            <div className="flex items-center gap-5 font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-3 pl-2">            <Icon icon="material-symbols:person" className="w-6 h-6 text-[#FF7600]" />
<h1 className="text-sm">პროფილი</h1></div>
            <div className="flex items-center gap-5 font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-3 pl-2">              <Icon icon="ic:baseline-logout" width={24} height={24} className="text-[#616161] " />
<h1 className="text-sm">გასვლა</h1></div>


              <div className="text-text-base font-light text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-5 pl-2">ქართული</div>
                        <div className="text-sm text-black fomt-semibold pl-2 flex w-full py-5">ჩვენს შესახებ</div>
                        <div className="text-sm text-black fomt-semibold pl-2 flex w-full">კონტაქტი</div>
            </div>
                      ) : (
                        <div>
                                                  <div className="text-base text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-5 pl-2">ქართული</div>
                        <div className="text-sm text-black fomt-semibold pl-2 flex w-full py-5">ჩვენს შესახებ</div>
                        <div className="text-sm text-black fomt-semibold pl-2 flex w-full">კონტაქტი</div>

                        </div>
            
                        )}


            </div>
          </div>
        </div>
      </Drawer>

      <div className="w-full h-full flex items-center">
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
  );
}
