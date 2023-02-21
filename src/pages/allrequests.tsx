import { MenuActiveItems } from "@/components/desktopcomponents/menuActiveitems";
import { Layout } from "@/hooks/Layout";
import { useEffect, useState } from "react";
import { Requests as IRequests, SupportedModels as ISupportedModels } from "@prisma/client";
import { getRequests, getSupportedModels } from "@/lib/api";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

export default function AllRequests() {
  const [requests, setrequests] = useState<IRequests[]>();
  const [supported, setsupported] = useState<ISupportedModels[]>();
  const { user } = useUser();

  useEffect(() => {
    getRequests()
      .then((r) => r.json())
      .then((res) => setrequests(res.requests));
  }, []);

  useEffect(() => {
    getSupportedModels()
      .then((r) => r.json())
      .then((res) => setsupported(res.requests));
  }, []);
  
  console.log(supported)
  
  const getSupported = () => {
    return supported?.filter((r) => r.userId == user?.id);
  };

  const openRequests = () => {
    return requests?.filter((r) => r.status === "Open" && r.userId == user?.id);
  };
  return (
    <div className="bg-[#FFFDF7] min-h-[85vh] h-auto w-full">
      <div className="flex flex-col w-3/4 max-w-6xl ml-auto mr-auto">
        <div className="w-full pt-5 pb-5">
          {getSupported()?.map((r) => (
            <div key={r.model_id}>
              <h1>{r.model_id}</h1>
            </div>
          ))}
          {openRequests()?.map((r) => (
            <Link
              href={`/chat/${r.id}`}
              key={r.id}
              className="flex w-auto max-h-28 hover:bg-[#E8E6E1] hover:bg-opacity-90 py-2 mx-2"
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
              <div className="flex items-center justify-center mr-3" onClick={(e) => e.preventDefault()}>
                <MenuActiveItems id={r.id} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

AllRequests.Layout = Layout;
