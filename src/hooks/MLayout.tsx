import { PropsWithChildren } from "react";

export function MobileLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
