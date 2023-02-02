import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import Link from "next/link";


export function Menuicon() {
  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
      <Icon icon="material-symbols:menu-rounded" color="616161" width="28" height="30" />
      </Menu.Target>

      <Menu.Dropdown>
          <Link href="/about">  <Menu.Item><h1>ჩვენს შესახებ</h1></Menu.Item></Link>
        <Link href="/contact">  <Menu.Item
        >
       <h1>კონტაქტი</h1>
        </Menu.Item></Link>
      </Menu.Dropdown>
    </Menu>
  );
}