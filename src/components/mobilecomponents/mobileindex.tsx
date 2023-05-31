import { Icon } from "@iconify/react";
import { useState } from "react";
import { SpecialistModal } from "../specialistmodal/specialistmodal";
import Link from "next/link";

export function MobileIndex() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen h-auto w-full pt-[50px]">

      
      <h1 className="">ჩვენ გთავაზობთ</h1>
      <div className="w-5/6 ml-auto mr-auto text-center ">
        <div className="flex flex-col items-center justify-center">
          <img src="https://i.imgur.com/Y8Di5eV.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">შეავსე ფორმა</h1>
            <h6 className="text-sm text-[#000039]">შეავსე ფორმა სპეციალისტის გამოსაძახებლად</h6>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="https://i.imgur.com/XYU3U7L.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">წავიყვანთ და შევამოწმებთ</h1>
            <h6 className="text-sm text-[#000039]">სპეციალისტი წაიყვანს თქვენს ავტომობილს და შეამოწმებს</h6>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="https://i.imgur.com/uBHol7W.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">შევაკეთებთ</h1>
            <h6 className="text-sm text-[#000039]">ჩვენ შეგითანხმებთ ყველა დეტალს, ფასს და შევაკეთებთ ავტომობილს</h6>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="https://i.imgur.com/9DiOqVS.png" alt="Service Image" />
          <span>
            <h1 className="text-2xl font-medium">დაგიბრუნებთ</h1>
            <h6 className="text-sm text-[#000039]">შეკეთებულ ავტომობილს დაგიბრუნებთ სასურველ ლოკაციაზე.</h6>
          </span>
        </div>
      </div>
      <div className="grid items-center w-full grid-cols-2 mt-10 text-center mb-14">
        <Link href="/contact" className="p-2 text-lg font-normal border border-solid border-[#FF7600] text-black">
          იხილეთ სიახლეები
        </Link>
        <Link href="/contact" className="p-2 text-lg font-normal border border-solid border-[#FF7600] text-black">
          იხილეთ პარტნიორები
        </Link>
      </div>
    </div>
  );
}
