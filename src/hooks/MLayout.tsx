import { MobileBottom } from "@/components/mobilecomponents/Menu/mobilebottom";
import { MobileTop } from "@/components/mobilecomponents/Menu/mobiletop";
import { PropsWithChildren } from "react";

export function MobileLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <MobileTop />
      <main>{children}</main>
      <MobileBottom />
    </div>
  );
}
