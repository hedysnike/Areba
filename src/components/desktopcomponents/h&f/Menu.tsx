import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import Link from "next/link";


export function Menuicon() {
  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
      <Icon icon="material-symbols:menu-rounded" color="black" width="28" height="30" />
      </Menu.Target>

      <Menu.Dropdown>
          <Link href="/about">  <Menu.Item> ჩვენს შესახებ</Menu.Item></Link>
        <Link href="/contact">  <Menu.Item
        >
        კონტაქტი
        </Menu.Item></Link>
      </Menu.Dropdown>
    </Menu>
  );
}