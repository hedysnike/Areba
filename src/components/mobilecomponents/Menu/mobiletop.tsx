import { Icon } from "@iconify/react";

export function MobileTop() {
  return (
    <div className="bg-white h-[50px] fixed w-full">
      <div className="w-full h-full flex items-center">
        <Icon className="ml-2 opacity-2o" icon="material-symbols:menu-rounded" color="black" width="25" height="25" />
        <img className="w-auto h-[35px] ml-4 cursor-pointer " src="https://i.imgur.com/K5vhBw4.png" />
      </div>

      <div></div>
    </div>
  );
}
