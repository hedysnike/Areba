import { Layout } from "@/hooks/Layout";
import { useRouter } from "next/router";

export function LLogin() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="h-full flex text-center w-full  text-lg">
                    <div className="h-full flex text-center w-full border-b border-solid border-[#dcdcdcaf] text-lg">
          <h1 onClick={() => router.push("/login")} className="w-[50%] hover:bg-[#FDF2E8] text-[#FF7600] py-3">ავტორიზაცია</h1>
          <h1 onClick={() => router.push("/register")} className="w-[50%] hover:bg-[#FDF2E8] text-[#FF7600] py-3">რეგისტრაცია</h1>
          </div>
    </div>
  );
}

