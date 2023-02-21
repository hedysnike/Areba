import { Icon } from "@iconify/react";
import { Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export function MobileTop() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-white h-[50px] fixed w-full">
      <Drawer opened={opened} onClose={() => setOpened(false)} size="65%" withCloseButton={false}>
        <div className="w-full">
          <div className="flex items-center flex-col w-full h-auto">
            <div  className="h-[150px] w-full bg-cover bg-center overflow-hidden bg-[url('https://areba.ge/images/bg-l-t.jpg')] flex items-center justify-center">
            <Link href="/login" >
              <button className="bg-[#FF7600] py-2 px-4 shadow-md shadow-[#00000077]  text-white flex text-sm items-center rounded outline-none"><Icon icon="ic:baseline-person" color="white" width="24" height="24" /> ავტორიზაცია</button>             
               </Link>
</div>
            <div className="text-xs text-black fomt-semibold border-b border-solid border-[#e9e9e9] w-full flex items-center py-5 pl-2">ქართული</div>
            <div className="text-sm text-black fomt-semibold pl-2 flex w-full py-5">ჩვენს შესახებ</div>
            <div className="text-sm text-black fomt-semibold pl-2 flex w-full">კონტაქტი</div>
          </div>
        </div>
      </Drawer>

      <div className="w-full h-full flex items-center">
        <Icon
          onClick={() => setOpened(true)}
          className="ml-2 opacity-2o"
          icon="material-symbols:menu-rounded"
          color="black"
          width="25"
          height="25"
        />
        <img className="w-auto h-[35px] ml-4 cursor-pointer " src="https://i.imgur.com/K5vhBw4.png" />
      </div>
    </div>
  );
}
