import { PropsWithChildren } from "react";
import { Navigation } from "@/components/desktopcomponents/h&f/navigation";
import Footer from "@/components/desktopcomponents/h&f/Footer";
import { Assistant } from "@/components/desktopcomponents/h&f/assistant";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <Assistant />
    </div>
  );
}
