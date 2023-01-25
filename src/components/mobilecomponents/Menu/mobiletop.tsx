import { Icon } from "@iconify/react";
import { Drawer } from "@mantine/core";
import { useState } from "react";

export function MobileTop() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-white h-[50px] fixed w-full">
      <Drawer opened={opened} onClose={() => setOpened(false)} size="65%" withCloseButton={false}>
        <div className="">
          <div className="flex items-center flex-col w-full h-auto">
            <div  className="h-[150px] w-[255px] overflow-hidden bg-[url('https://areba.ge/images/bg-l-t.jpg')] flex items-center justify-center">
            <div><button className="bg-[#FF7600] py-2 px-7 shadow-md shadow-[#00000077]  text-white flex text-sm flex-col items-center rounded"><Icon icon="ic:baseline-person" color="white" width="24" height="24" /> LOGIN / REGISTER</button></div>
            </div>
            <div>Language</div>
            <div>about</div>
            <div>contact</div>
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

      <div></div>
    </div>
  );
}
