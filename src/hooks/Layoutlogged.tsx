import { PropsWithChildren } from "react";
import { NavigationLogged } from "@/components/desktopcomponents/h&f/navigationlogged";
import { Assistant } from "@/components/desktopcomponents/h&f/assistant";
import { Footer } from "@/components/desktopcomponents/h&f/Footer";

export function Layoutlogged({ children }: PropsWithChildren) {
  return (
    <div>
      <NavigationLogged />
      <main>{children}</main>
      <Footer />
      <Assistant />
    </div>
  );
}