import { useEffect, useState } from "react";
import { Requests as IRequests, SupportedModels as ISupportedModels } from "@prisma/client";
import { getRequests, getsupportedmodel } from "@/lib/api";
import { useUser } from "@/hooks/useUser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function AllRequests() {
  const [requests, setrequests] = useState<IRequests[]>();
  const [supported, setSupported] = useState<ISupportedModels[]>();
  const { user,  } = useUser();
  const { t } = useTranslation("common");

  
  useEffect(() => {
    getsupportedmodel()
    .then((r) => r.json())
    .then((res) => setSupported(res.supported));
  }, []);
  
  useEffect(() => {
    getRequests()
      .then((r) => r.json())
      .then((res) => setrequests(res.requests));
  }, []);
  
  console.log(supported)
  
  const getSupported = () => {
    return supported?.filter((r) => r.userId == user?.id);
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
        </div>
      </div>
    </div>
  );
}


export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}