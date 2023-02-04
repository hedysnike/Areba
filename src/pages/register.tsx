import { Buttons } from "@/components/desktopcomponents/buttons";
import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";
import { useState } from "react";
import * as api from "@/lib/api";
import { useUser } from "@/hooks/useUser";
import { InputText } from "@/components/desktopcomponents/inputs";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { retry } = useUser();

  const register = () => {
    api.register(email, password, name, surname, phone ).then(retry);
  };

  return (
    <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto min-h-[75vh] h-auto mt-5 border border-solid border-[#dcdcdcaf]">
        <div className="h-auto"> {LLogin()}</div>
        <div className="grid w-full h-auto grid-cols-1 bg-white">
          <div className="relative rounded-[4px] group m-4">
          <InputText label="სახელი *" onChange={(e) => setName(e.target.value)}/>          
          </div>
          <div className="relative rounded-[4px] group m-4">
          <InputText label="გვარი *" onChange={(e) => setSurname(e.target.value)}/>
          </div>
          <div className="relative rounded-[4px] group p-4">
          <InputText label="მობილური" onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="relative rounded-[4px] group p-4">
          <InputText label="ელ. ფოსტა *" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="relative rounded-[4px] group p-4">
          <InputText label="პაროლი *" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Buttons text="რეგისტრაცია" onClick={register} />
        </div>
      </div>
    </div>
  );
}

Register.Layout = Layout;
