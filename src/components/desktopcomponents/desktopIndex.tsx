import { useState } from "react";
import { Icon } from "@iconify/react";
import { Layout } from "@/hooks/Layout";
import { SpecialistModal } from "./specialistmodal/specialistmodal";

export function DesktopIndex() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen h-auto bg-[#FFFDF7]">
      <SpecialistModal openModal={openModal} onClose={() => setOpenModal(false)} />
      <div>
        <img src="https://i.imgur.com/sfB255D.png" className="w-full h-96" alt="" />
      </div>
      <div className="flex items-center justify-center mb-10 mt-7">
        <button
          onClick={() => setOpenModal(true)}
          className="p-3 pr-7 pl-6 rounded bg-[#FF7600] hover:bg-[#ff8c27] text-white text-2xl  flex items-center gap-5"
        >
          <Icon icon="ic:baseline-send" color="white" width="25" height="25" />
          <h1>სპეციალისტის გამოძახება</h1>
        </button>
      </div>
      <h1 className="mb-8 text-[34px] font-normal text-center">ჩვენ გთავაზობთ</h1>
      <div className="grid grid-cols-4 gap-3 w-5/6 ml-auto mr-auto text-center max-w-[1200px]">
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
            <h6 className="text-sm text-[#000039]">შეკეთებულ ავტომობილს დაგიბრუნებთ სასურველ ლოკაციაზე.</h6>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="mt-10 text-4xl font-normal mb-80">სიახლეები</h1>
        <h1 className="mb-10 text-4xl font-normal pb-52">პარტნიორები</h1>
      </div>
    </div>
  );
}

DesktopIndex.Layout = Layout;
