import { Buttons } from "@/components/desktopcomponents/buttons";
import { InputText } from "@/components/desktopcomponents/inputs";
import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";
import { useState } from "react";
import { login } from "@/lib/api";
import { useUser } from "@/hooks/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { retry } = useUser();

  const auth = () => {
    login(email, password).then(() => retry());
  };

  return (
    <div className="min-h-[84vh] h-full bg-[#FFFDF7]">
      <div className="w-3/4 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
        <div className="h-auto">{LLogin()}</div>
        <div className="grid ml-auto mr-auto h-auto grid-cols-1 w-[90%] ">
          <div className="grid mt-5">
            <InputText onChange={(e) => setEmail(e.target.value)} label="ელ ფოსტა *" />
          </div>
          <div className="grid mt-5">
            <InputText onChange={(e) => setPassword(e.target.value)} label="პაროლი *" />
          </div>
          <div className="flex justify-end mt-8">
            <Buttons text="შესვლა" onClick={auth} />
          </div>
        </div>
      </div>
    </div>
  );
}

Login.Layout = Layout;

// text-[#9CA3AF]
