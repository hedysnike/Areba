import { Icon } from "@iconify/react";
import {  Menu } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export function MenuClosedItems() {
  const [opene, setOpen] = useState(false);

  return (
    <Menu shadow="md" width={150} opened={opene} onChange={(e) => setOpen(e)}>
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
          <Menu.Item>
            <h1 className="p-[2px] font-light text-black">Delete</h1>
          </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
function useDispatch() {
  throw new Error("Function not implemented.");
}
