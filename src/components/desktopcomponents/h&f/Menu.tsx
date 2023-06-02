import { Icon } from "@iconify/react";
import { Burger, Menu } from "@mantine/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useState } from "react";

export function Menuicon() {
  const [opene, setOpen] = useState(false);
  const title = opene ? "Close menu" : "Open menu";
  const { t } = useTranslation("common");

  return (
    <Menu shadow="md" width={150} opened={opene} onChange={(e) => setOpen(e)}>
      <Menu.Target>
        <Burger size={16} opened={opene} title={title} color="#616161" />
      </Menu.Target>
      <Menu.Dropdown className="p-0">
        <Link href="/about">
          <Menu.Item>
            <h1 className="p-1 text-[#616161] font-semibold">ჩვენს შესახებ</h1>
          </Menu.Item>
        </Link>
        <Link href="/contact">
          <Menu.Item>
            <h1 className="p-1 text-[#616161] font-semibold">კონტაქტი</h1>
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  );
}
function useDispatch() {
  throw new Error("Function not implemented.");
}

