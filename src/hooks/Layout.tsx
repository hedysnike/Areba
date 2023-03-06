import { PropsWithChildren } from "react";
import { Navigation } from "@/components/desktopcomponents/h&f/navigation";
import { Assistant } from "@/components/desktopcomponents/h&f/assistant";
import { Footer } from "@/components/desktopcomponents/h&f/Footer";

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
``