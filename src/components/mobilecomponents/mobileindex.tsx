import { MobileLayout } from "@/hooks/MLayout";

export function MobileIndex() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Mobile</h1>
        </div>
    );
}

MobileIndex.Layout = MobileLayout;
