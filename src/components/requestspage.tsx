import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { Requests as IRequests } from "@prisma/client";
import {  getRequests } from "@/lib/api";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { MenuActiveItems } from "./desktopcomponents/menuActiveitems";
import { MenuClosedItems } from "./desktopcomponents/menucloseditems";

export function RequestsPage() {
  const [requests, setrequests] = useState<IRequests[]>();
  const { user } = useUser();

  useEffect(() => {
    getRequests()
      .then((r) => r.json())
      .then((res) => setrequests(res.requests));
  }, []);

  const openRequests = () => {
    return requests?.filter((r) => r.status === "Open" && r.userId == user?.id);
  };
  const closedRequests = () => {
    return requests?.filter((r) => r.status === "Closed" && r.userId == user?.id);
  };
  return (
    <div className="bg-[#FFFDF7] min-h-[90vh] h-auto w-full">
      <div className="flex flex-col max-w-6xl ml-auto mr-auto">
        <div className="w-full pb-5">
          <Tabs defaultValue="first">
            <Tabs.List className="flex w-full">
              <Tabs.Tab className="w-[50%] text-[#B3B3B3] py-4 bg-white" color="orange" value="first">
                <h1>ACTIVE REQUESTS</h1>
              </Tabs.Tab>
              <Tabs.Tab className="w-[50%] text-[#B3B3B3] py-4 bg-white" color="orange" value="second">
                <h1>OLD/CLOSED</h1>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first">
              {openRequests()?.map((r) => (
                <Link
                  href={`/chat/${r.id}`}
                  key={r.id}
                  className="flex w-auto max-h-28 hover:bg-[#E8E6E1] hover:bg-opacity-90 py-2 mx-2"
                >
                  <div className="flex items-center justify-start w-[72px]">
                    <img className="w-10 h-auto" src="https://i.imgur.com/Kxwkh93.png" alt="car logo w-[90%] md:w-3/4" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="text-sm">
                      <h1>
                        {r.make} {r.model} - {r.year}
                      </h1>
                    </div>
                    <div className="text-sm">
                      <h2>{r.details}</h2>
                    </div>
                    <div className="text-xs">
                      <h2>type: {r.type}</h2>
                    </div>
                    <div className="text-xs">
                      <h2>location: თბილისი</h2>
                    </div>
                    <div className="text-xs">
                      <h2>02-02-2023 08:07:48</h2>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mr-3" onClick={(e) => e.preventDefault()}>
                    <MenuActiveItems id={r.id} />
                  </div>
                </Link>
              ))}
            </Tabs.Panel>
            <Tabs.Panel value="second">
              {closedRequests()?.map((r) => (
                <Link
                  href={`/chat/${r.id}`}
                  key={r.id}
                  className="flex w-auto max-h-28 hover:bg-[#E8E6E1] hover:bg-opacity-90 py-2 mx-2 w-[90%] md:w-3/4"
                >
                  <div className="flex items-center justify-start w-[72px]">
                    <img className="w-10 h-auto" src="https://i.imgur.com/Kxwkh93.png" alt="car logo" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="text-sm">
                      <h1>
                        {r.make} {r.model} - {r.year}
                      </h1>
                    </div>
                    <div className="text-sm">
                      <h2>{r.details}</h2>
                    </div>
                    <div className="text-xs">
                      <h2>type: {r.type}</h2>
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
                    <div onClick={(e) => e.preventDefault()} >
                      <MenuClosedItems id={r.id} />
                    </div>
                  </div>
                </Link>
              ))}
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

