import { useState } from "react";
import { SpecialistModal } from "@/components/desktopcomponents/h&f/specialistmodal";

export function Assistant() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="fixed bottom-5 right-5">
    <SpecialistModal openModal={openModal} onClose={() => setOpenModal(false)} />
      <img onClick={() => setOpenModal(true)} className="cursor-pointer" src="https://i.imgur.com/NbjqJln.png" alt="" />
    </div>
  );
}
