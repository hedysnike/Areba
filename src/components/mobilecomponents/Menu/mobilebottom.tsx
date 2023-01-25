import { Icon } from "@iconify/react";

export function MobileBottom() {
  return (
    <div className="bg-white bottom-0 fixed w-full h-[50px]">
        <div className="flex opacity-90 w-11/12 ml-auto mr-auto">
        <Icon className="w-[16%]" icon="material-symbols:add-circle" color="#FF7600" width="4" height="47" />
        <Icon className="w-[16%]" icon="material-symbols:add-circle" color="#FF7600" width="47" height="47" />
        <Icon className="w-[36%]" icon="material-symbols:add-circle" color="#FF7600" width="47" height="47" />
        <Icon className="w-[16%]" icon="material-symbols:add-circle" color="#FF7600" width="47" height="47" />
        <Icon className="w-[16%]" icon="material-symbols:add-circle" color="#FF7600" width="47" height="47" />
        </div>
    </div>
  );
}
