import { Layout } from "@/hooks/Layout";
import { closeRequests, deleteRequest } from "@/lib/api";
import { Icon } from "@iconify/react";
import { Tabs } from "@mantine/core";
import { Requests } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Chat() {
  const router = useRouter();
  const { id } = router.query;
  const [request, setRequest] = useState<Requests>();


  useEffect(() => {
    fetch(`/api/getRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((r) => r.json())
      .then((res) => setRequest(res.request));
  }, [id]);

  if (!request) {
    return <div>Loading...</div>;
  }


  return (
    <div className="h-full min-h-[93vh] pt-5 bg-[#E0E0E0] ">
      <div className="w-3/4 max-w-6xl ml-auto mr-auto rounded-md shadow shadow-[#1d1d1d81] overflow-hidden">
        <div className="flex">
          <div className="h-auto w-[300px] shrink-0 bg-white">
            <div>
              <div className="py-3 px-7">
                <div className="flex items-center">
                  <Link href="/requests">
                  <Icon icon="ic:baseline-arrow-back-ios-new" color="black" width="16" height="16" />
                  </Link>
                  <h1 className="ml-2 text-sm ">
                    {request?.make} - {request?.year}
                  </h1>
                </div>
                <hr className="w-full mt-3 bg-black" />
                <div className="text-xs text-[#0000008A] ">
                  <h1>{request?.type}</h1>
                </div>
                <div className="text-xs text-[#0000008A] ">
                  <h1>Location: თბილისი</h1>
                </div>
                <div className="text-sm font-semibold">
                  <h1>{request?.details}</h1>
                </div>
                <div className="text-xs text-[#0000008A] ">
                  <h1>02-02-2023 08:07:48</h1>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <button onClick={(e) => closeRequests(request.id)} className="bg-[#FF7600] shadow-[#3434349e] shadow-sm pt-[6px] pb-[10px] text-white rounded text-sm px-4">
                  <h1>BOUGHT</h1>
                </button>
                <button onClick={(e) => deleteRequest(request.id)} className="bg-[#FF5722] shadow-[#3434349e] shadow-sm pt-[6px] pb-[10px] text-white rounded text-sm px-4">
                  <h1>DELETE</h1>
                </button>
              </div>
              <hr className="w-full mt-3 bg-black" />

              <div>
                <Tabs defaultValue="first">
                  <Tabs.List className="flex w-full">
                    <Tabs.Tab className="w-[50%] text-sm text-[#B3B3B3]" color="orange" value="first">
                      <h1>OFFERS</h1>
                    </Tabs.Tab>
                    <Tabs.Tab className="w-[50%] text-sm text-[#B3B3B3]" color="orange" value="second">
                      <h1>SHOPS</h1>
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </div>
              <div className="flex items-center w-full pt-2 hover:bg-[#E8E8E8]">
                <div className="w-[25%]">IMAGE</div>
                <div className="w-[45%] flex flex-col">
                  <h1 className="pb-[6px] text-sm">შპს არება</h1>
                  <h1 className="text-xs text-[#757575]">ზურა</h1>
                </div>
                <div className="w-[14%]">
                  <Icon icon="mdi:call" color="#ff7600" width="24" height="24" hFlip={true} />
                </div>
                <div className="w-[16%]">
                  <Icon icon="ic:baseline-message" color="#ff7600" width="24" height="24" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80vh] flex flex-col w-full">
            <div className="bg-[#EEEEEE] px-6 flex items-center justify-between w-full h-[50px] drop-shadow-md shadow-black">
              <div className="">UserName</div>
              <Icon icon="material-symbols:call-end" color="#FF7600" width="28" height="28" />
            </div>

            <div>CHATROOM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Chat.Layout = Layout;
