import { deleteRequest } from "@/lib/api";
import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import { useState } from "react";
import { DeleteModal } from "./specialistmodal/deletemodal";

interface Props {
  id: string;
}

export function MenuClosedItems({ id }: Props) {
  const [opene, setOpen] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <Menu shadow="md" width={150} opened={opene} onChange={(e) => setOpen(e)}>
      <DeleteModal
        openModal={openModal2}
        onClick={(_e: any) => deleteRequest(id)}
        onClose={() => setOpenModal2(false)}
      />

      <Menu.Target>
        <Icon
          icon="ic:round-more-vert"
          className="p-2 mr-[3px] rounded-full hover:bg-[#E9DDCE]"
          color="#ff7600"
          width="42"
          height="42"
        />
      </Menu.Target>
      <Menu.Dropdown className="p-0">
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
