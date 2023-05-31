import { PropsWithChildren } from "react";
import { Navigation } from "@/components/desktopcomponents/h&f/navigation";
import { Assistant } from "@/components/desktopcomponents/h&f/assistant";
import { Footer } from "@/components/desktopcomponents/h&f/Footer";
import { MobileTop } from "@/components/desktopcomponents/h&f/mobiletop";
import { MobileBottom } from "@/components/desktopcomponents/h&f/mobilebottom";

export function Layout({ children }: PropsWithChildren) {
  
  return (
    <div>

<div className="md:hidden">
<MobileTop />
</div>

<div className="hidden md:block">
      <Navigation />
</div>
  
      <main>{children}</main>
  
  <div className="hidden md:block">
      <Footer />
      <Assistant />
  </div>


      <div className="md:hidden">
      <MobileBottom />
      </div>

    </div>
  );
}
``