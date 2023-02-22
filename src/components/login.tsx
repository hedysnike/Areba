import { Buttons } from "@/components/desktopcomponents/buttons";
import { login } from "@/lib/api";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { TextField } from "@mui/material";
import { LLogin } from "./desktopcomponents/registertoggle";


export function LoginPage() {
const router = useRouter();
const { retry } = useUser();
const form = useForm({
  initialValues: {
    email: "",
    password: "",
  },
  validate: {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : "აუცილებელია ველის შევსება"),
    password: (value) =>
      value.length > 5 ? null : "აუცილებელია ველის შევსება",
  },
});

return (
  <div className="min-h-[84vh] h-full py-[50px] bg-[#FFFDF7]">
    <div className="md:w-3/4 w-[90%] mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
      <div className="h-auto">{LLogin()}</div>
      <div className="grid ml-auto mr-auto h-auto grid-cols-1 w-[90%] ">
        <form
          onSubmit={form.onSubmit((values) => {
            const { email, password } = values;

            login(email, password)
              .then((res) => res.json())
              .then((res) => {
                if (res.user) {
                  retry();
                  router.push("/profile");
                }
              });
          })}
        >
          <div className="grid mt-5">
            <TextField
              label="ელ-ფოსტა *"
              helperText={form.errors.email}
              {...form.getInputProps("email")}  
            />
          </div>
          <div className="grid mt-5">
            <TextField
              type="password"
              label="პაროლი *"
              {...form.getInputProps("password")}
              helperText={form.errors.password}
            />
          </div>
          <div className="flex justify-end mt-8">
            <Buttons type="submit" text="შესვლა" />
          </div>
        </form>
      </div>
    </div>
  </div>
);
}