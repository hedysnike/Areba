import { Layout } from "@/hooks/Layout";
import { Icon } from "@iconify/react";
import { Tabs } from "@mantine/core";

export default function Requests() {
  return (
    <div className="bg-[#FFFDF7] min-h-[85vh] h-auto w-full">
      <div className="flex flex-col w-3/4 max-w-6xl ml-auto mr-auto">
        <div className="w-full pt-5 pb-5">
          <Tabs defaultValue="first">
            <Tabs.List className="flex w-full">
              <Tabs.Tab className="w-[50%]" value="first">
                <h1>ACTIVE REQUESTS</h1>
              </Tabs.Tab>
              <Tabs.Tab className="w-[50%]" value="second">
                <h1>OLD/CLOSED</h1>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first">
              <div className="flex w-auto max-h-28 hover:bg-[#E8E6E1] hover:bg-opacity-90 py-2 mx-2">
                <div className="flex items-center justify-start w-[72px]">
                  <img className="w-10 h-auto" src="https://i.imgur.com/Kxwkh93.png" alt="car logo" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="text-sm">
                    <h1>BMW 320i - 2005</h1>
                  </div>
                  <div className="text-sm">
                    <h2>DESCRIPTION</h2>
                  </div>
                  <div className="text-xs">
                    <h2>type: ახალი</h2>
                  </div>
                  <div className="text-xs">
                    <h2>location: თბილისი</h2>
                  </div>
                  <div className="text-xs">
                    <h2>02-02-2023 08:07:48</h2>
                  </div>
                </div>
                <div className="flex items-center justify-center mr-3">
                  <Icon
                    icon="ic:round-more-vert"
                    className="p-2 rounded-full hover:bg-[#E9DDCE]"
                    color="#ff7600"
                    width="42"
                    height="42"
                  />
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="second">
              <div className="flex w-auto max-h-28 hover:bg-[#E8E6E1] hover:bg-opacity-90 py-2 mx-2">
                <div className="flex items-center justify-start w-[72px]">
                  <img className="w-10 h-auto" src="https://i.imgur.com/Kxwkh93.png" alt="car logo" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="text-sm">
                    <h1>BMW 320i - 2006</h1>
                  </div>
                  <div className="text-sm">
                    <h2>DESCRIPTION</h2>
                  </div>
                  <div className="text-xs">
                    <h2>type: ახალი</h2>
                  </div>
                  <div className="text-xs">
                    <h2>location: თბილისი</h2>
                  </div>
                  <div className="text-xs">
                    <h2>02-02-2023 08:07:48</h2>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mr-3 text-xs text-white">
                  <button className="px-[6px] bg-[#E57373] pt-[1px] pb-[3px] rounded">
                 <h1>Closed</h1>
                  </button>
                  <Icon
                    icon="ic:round-more-vert"
                    className="p-2 rounded-full hover:bg-[#E9DDCE]"
                    color="#ff7600"
                    width="42"
                    height="42"
                  />
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

Requests.Layout = Layout;
