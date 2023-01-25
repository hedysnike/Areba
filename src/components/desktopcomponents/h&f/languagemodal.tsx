import { Menu } from "@mantine/core";

export function LanguageMenu() {
  return (
    <Menu shadow="md" width={60}>
      <Menu.Target>
        <button>GE</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>ENG</Menu.Item>

      </Menu.Dropdown>
    </Menu>
  );
}
