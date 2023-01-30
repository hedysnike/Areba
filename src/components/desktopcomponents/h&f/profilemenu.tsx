import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import Link from "next/link";

export function ProfileMenu() {
  return (
    <>
      <Menu shadow="md" width={250}>
        <Menu.Target>
          <button className="flex px-[13px] flex-col sm:flex-row  sm:gap-2 items-center justify-center h-fit border border-solid border-[#FF7600] hover:bg-[#FEF2E8] py-[6px] rounded-[4px]">
            <Icon icon="material-symbols:person" className="w-6 h-6 text-[#FF7600]" />
            <h1>ჩემი გვერდი</h1>
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          <Link href="/profile">
            <Menu.Item>
              <h1 className="text-[#FF7600] text-xl text-center">ზაზა გუგავა</h1>
              <h1 className="text-[#FFAB00] text-xs text-center">test@mail.com</h1>
            </Menu.Item>
          </Link>
          <Link href="/contact">
            <Menu.Item>
              <div className="flex justify-start px-4">
                <Icon icon="material-symbols:person" width={24} height={24} className="text-[#FF7600] " />
                <h1 className="pl-[52px] text-sm font-semibold text-[#616161] text-left ">დამატება  </h1>
              </div>
            </Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
