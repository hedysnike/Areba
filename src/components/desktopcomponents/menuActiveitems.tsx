import { deleteRequest, closeRequests } from "@/lib/api";
import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import { useState } from "react";

interface Props {
  id: string;
}

export function MenuActiveItems({ id } : Props) {
  const [opene, setOpen] = useState(false);

  return (
    <Menu shadow="md" width={150} opened={opene} onChange={(e) => setOpen(e)}>
      <Menu.Target>
        <Icon
          icon="ic:round-more-vert"
          className="p-2 rounded-full hover:bg-[#E9DDCE] mr-[6px]"
          color="#ff7600"
          width="42"
          height="42"
        />
      </Menu.Target>
      <Menu.Dropdown className="p-0">
          <Menu.Item onClick={(e) => closeRequests(id)}>
            <h1 className="p-[2px] font-light text-black">Mark As Bought</h1>
          </Menu.Item>
          <Menu.Item onClick={(e) => deleteRequest(id)}>
              <h1 className="p-[2px] font-light text-black">Delete</h1>
          </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
function useDispatch() {
  throw new Error("Function not implemented.");
}
