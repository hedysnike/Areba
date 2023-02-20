import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { SettingsMap } from "@/components/desktopcomponents/h&f/settingsmap";
import { Layout } from "@/hooks/Layout";
import { useUser } from "@/hooks/useUser";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Settings() {
  const { isLoggedIn } = useUser();
  const [activeMake, setActiveMake] = useState<string>("");
  const [activeTitle, setActiveTitle] = useState<string>("");

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }, [isLoggedIn]);

  const filterModels = Models as Array<typeof Models[number]>;
  const filteredModels = useMemo(() => filterModels.filter((model) => model.make_id === activeMake), [activeMake]);

  const years = Array.from({ length: 55 }, (_, i) => 2023 - i);

  return (
    <div className="min-h-[80vh] bg-[#E0E0E0] text-black">
      <div className="flex w-3/4 max-w-6xl ml-auto mr-auto py-5 min-h-[80vh] ">
        <div className="w-[26%] min-w-[270px] bg-white border-r border-solid border-opacity-20 border-black">
          <div className="flex-row h-[50px] flex items-center">
            <div className="w-[18%] justify-center flex">
              <Link href="/profile">
                <Icon icon="ic:baseline-arrow-back-ios-new" color="black" width="14" height="14" />
              </Link>
            </div>
            <div className="flex w-[82%]">
              <div className="ml-5 text-sm text-black">
                <h2>მწარმოებლები</h2>
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll max-h-[80vh] ">
            {Makes.map((make) => (
              <div
                key={make._id}
                onClick={() => {setActiveMake(make._id); setActiveTitle(make.title)}}
                className="p-4 text-sm hover:bg-[#E8E8E8] flex flex-row w-full"
              >
                <div>LOGO</div>
                <h1 className="w-[85%]">{make.title}</h1>
                <div className="w-[15%] flex justify-center">
                  <Icon icon="ic:baseline-chevron-right" color="#757575" width="20" height="20" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[74%] bg-white">
          <div className="bg-[#EEEEEE]  h-[49px] px-4 py-[9px] text-sm shadow-b flex items-center flex-row shadow-md shadow-[#b2b2b2]">
            მარკის ლოგო
            <h2 className="pl-4">{activeTitle}</h2>
          </div>

          <div className="w-full p-[14px] text-sm overflow-y-scroll max-h-[80vh]">
            {filteredModels.map((model) => (
              <SettingsMap key={model.id} title={model.title} id={model._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Settings.Layout = Layout;
