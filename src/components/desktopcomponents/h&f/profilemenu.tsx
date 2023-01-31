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
        <Menu.Dropdown className="p-0">
          <Link href="/profile">
            <Menu.Item>
              <h1 className="text-[#FF7600] text-xl text-center">ზაზა გუგავა</h1>
              <h1 className="text-[#FFAB00] text-xs text-center">test@mail.com</h1>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Link href="/add">
          <Menu.Item>
            <div className="flex items-center justify-start px-3">
              <Icon icon="ic:outline-plus" width={24} height={24} className="text-[#616161] " />
              <h1 className=" pl-7 text-sm font-semibold text-[#616161]  ">დამატება </h1>
            </div>
          </Menu.Item>
          </Link>
          <Link href="/requests">
            <Menu.Item>
              <div className="flex items-center justify-start px-3">
                <Icon icon="mdi:clipboard-outline" width={24} height={24} className="text-[#616161] " />
                <h1 className=" pl-7 text-sm font-semibold text-[#616161]  ">ჩემი მოთხოვნები </h1>
              </div>
            </Menu.Item>
          </Link>

          <Menu.Divider />
          <Link href="/profile">
            <Menu.Item>
              <div className="flex items-center justify-start px-3">
                <Icon icon="material-symbols:person" width={24} height={24} className="text-[#616161] " />
                <h1 className=" pl-7 text-sm font-semibold text-[#616161]  ">პროფილი </h1>
              </div>
            </Menu.Item>
          </Link>
          <Menu.Divider />
          <Menu.Item>
            <div className="flex items-center justify-start px-3">
              <Icon icon="ic:baseline-logout" width={24} height={24} className="text-[#616161] " />
              <h1 className=" pl-7 text-sm font-semibold text-[#616161]  ">გასვლა </h1>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
