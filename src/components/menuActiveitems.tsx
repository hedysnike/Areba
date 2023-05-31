import { deleteRequest, closeRequests } from "@/lib/api";
import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import { useState } from "react";
import { ActionModal } from "./specialistmodal/acationmodal";
import { DeleteModal } from "./specialistmodal/deletemodal";

interface Props {
  id: string;
}

export function MenuActiveItems({ id }: Props) {
  const [opene, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <Menu
      shadow="md"
      width={150}
      opened={opene}
      onChange={(e) => {
        setOpen(e);
      }}
    >
      <ActionModal openModal={openModal} onClick={() => closeRequests(id)} onClose={() => setOpenModal(false)} />
      <DeleteModal
        openModal={openModal2}
        onClick={(_e: any) => deleteRequest(id)}
        onClose={() => setOpenModal2(false)}
      />
      <Menu.Target>
        <Icon
          icon="ic:round-more-vert"
          className="p-2 rounded-full hover:bg-[#E9DDCE] mr-[6px]"
          color="#ff7600"
          width="42"
          height="42"
          onClick={() => {
            setOpen(!opene);
          }}
        />
      </Menu.Target>
      <Menu.Dropdown className="p-0">
        <Menu.Item onClick={(e) => setOpenModal(true)}>
          <h1 className="p-[2px] font-light text-black">Mark As Bought</h1>
        </Menu.Item>
        <Menu.Item onClick={(e) => setOpenModal2(true)}>
          <h1 className="p-[2px] font-light text-black">Delete</h1>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
function useDispatch() {
  throw new Error("Function not implemented.");
}
