import { Buttons } from "@/components/desktopcomponents/buttons";
import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";
import { TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="min-h-[84vh] h-full bg-[#FFFDF7]">
      <div className="w-3/4 mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
        <div className="h-auto">{LLogin()}</div>
        <div className="grid ml-auto mr-auto h-auto grid-cols-1 w-[90%] ">
          <div className="grid mt-5">
            <TextField label="ელ ფოსტა *" />
            </div>
            <div className="grid mt-5">
            <TextField label="პაროლი *" />
            </div>
            <div className="flex justify-end mt-8" >
            <Buttons text="შესვლა" />
            </div>
        </div>
      </div>
    </div>
  );
}

Login.Layout = Layout;

// text-[#9CA3AF]
