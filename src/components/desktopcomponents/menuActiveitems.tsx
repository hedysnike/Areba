import { Icon } from "@iconify/react";
import { Burger, Menu } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

export function MenuActiveItems() {
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
        <Link href="/about">
          <Menu.Item>
            <h1 className="p-[2px] font-light text-black">Mark As Bought</h1>
          </Menu.Item>
        </Link>
        <Link href="/contact">
          <Menu.Item>
            <h1 className="p-[2px] font-light text-black">Delete</h1>
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
}
function useDispatch() {
  throw new Error("Function not implemented.");
}
