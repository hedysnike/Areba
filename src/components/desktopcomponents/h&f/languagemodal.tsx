import { Menu } from "@mantine/core";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function LanguageMenu() {
  const { t } = useTranslation("common");
  const [localeChanged, setLocaleChanged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localeChanged) {
      setLocaleChanged(false);
    }
  }, [localeChanged, t]);

  const changeLanguage = async (language: any) => {
    try {
      await router.push(router.pathname, router.asPath, { locale: language });
      setLocaleChanged(true);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <Menu shadow="md" width={60}>
      <Menu.Target>
        <button>{t("navigationlanguage")}</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item className="p-0 py-2 text-center w-full h-full flex items-center justify-center">
          <button onClick={() => changeLanguage("en")}>En</button>
        </Menu.Item>
        <Menu.Item className="p-0 py-2 w-full text-center h-full flex items-center justify-center">
            <button onClick={() => changeLanguage("ge")}>Ge</button>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
