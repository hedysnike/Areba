import { SpecialistModal } from "@/components/specialistmodal/specialistmodal";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen h-auto bg-[#FFFDF7] pt-[50px] lg:pt-0">
      <SpecialistModal openModal={openModal} onClose={() => setOpenModal(false)} />
      <div>
        <img src="https://i.imgur.com/sfB255D.png" className="w-full lg:h-96" alt="" />
      </div>
      <div className="flex items-center justify-center mt-6 mb-8 lg:mb-10 lg:mt-7">
        <button
          onClick={() => setOpenModal(true)}
          className="p-4 px-5 lg:p-3 lg:pr-7 lg:pl-6 rounded bg-[#FF7600] hover:bg-[#ff8c27] text-white lg:text-2xl  flex items-center gap-2 lg:gap-5"
        >
          <Icon icon="ic:baseline-send" color="white" width="25" height="25" />
          <h1>სპეციალისტის გამოძახება</h1>
        </button>
      </div>

      
      <h1 className="lg:mb-8 text-3xl lg:text-[34px] font-normal text-center">ჩვენ გთავაზობთ</h1>
      <div className="lg:grid lg:grid-cols-4 lg:gap-3 w-5/6 ml-auto mr-auto text-center max-w-[1200px]">
        <div className="flex flex-col items-center justify-center bg-white">
          <img src="https://i.imgur.com/Y8Di5eV.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">შეავსე ფორმა</h1>
            <h6 className="text-sm text-[#000039]">შეავსე ფორმა სპეციალისტის გამოსაძახებლად</h6>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-white">
          <img src="https://i.imgur.com/XYU3U7L.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">წავიყვანთ და შევამოწმებთ</h1>
            <h6 className="text-sm text-[#000039]">სპეციალისტი წაიყვანს თქვენს ავტომობილს და შეამოწმებს</h6>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-white">
          <img src="https://i.imgur.com/uBHol7W.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">შევაკეთებთ</h1>
            <h6 className="text-sm text-[#000039]">ჩვენ შეგითანხმებთ ყველა დეტალს, ფასს და შევაკეთებთ ავტომობილს</h6>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-white">
          <img src="https://i.imgur.com/9DiOqVS.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">დაგიბრუნებთ</h1>
            <h6 className="text-sm text-[#000039]"> შეკეთებულ ავტომობილს დაგიბრუნებთ სასურველ ლოკაციაზე.</h6>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
      <Link href="/contact" className="mt-10 p-2 mb-80 lg:text-4xl text-lg font-normal border border-solid border-[#FF7600] text-black">
          იხილეთ სიახლეები
        </Link>
        <Link href="/contact" className=" p-2 mb-52 lg:text-4xl text-lg font-normal border border-solid border-[#FF7600] text-black">
          იხილეთ პარტნიორები
        </Link>

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
