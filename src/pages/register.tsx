import { Buttons } from "@/components/desktopcomponents/buttons";
import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";
import * as api from "@/lib/api";
import { useUser } from "@/hooks/useUser";
import { InputAutoComplete, InputText } from "@/components/desktopcomponents/inputs";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { Role } from "@prisma/client";

export default function Register() {
  const router = useRouter();
  const { retry } = useUser();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
      phone: "",
      role: {} as { id: Role; label: string },
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "აუცილებელია სწორად ველის შევსება .!"),
      name: (value) => (value.length > 1 ? null : "აუცილებელია ველის შევსება .!"),
      phone: (value) => (value.length > 8 ? null : "აუცილებელია სწორად ველის შევსება .!"),
      surname: (value) => (value.length > 1 ? null : "აუცილებელია ველის შევსება .!"),
      password: (value) => (value.length > 5 ? null : "პაროლი უნდა იყოს სულ მცირე 6 ასო"),
    },
  });

  return (
    <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto min-h-[75vh] h-auto mt-5 border border-solid border-[#dcdcdcaf]">
        <div className="h-auto"> {LLogin()}</div>
        <div className="grid w-full h-auto grid-cols-1 bg-white">
          <form
            onSubmit={form.onSubmit((values) => {
              const { email, password, name, surname, phone, role } = values;

              api
                .register(email, password, name, surname, phone, role.id)
                .then((r) => r.json())
                .then((data) => {
                  if (data.user) {
                    retry();
                    router.push("/profile");
                  }
                });
            })}
          >
            <div className="relative rounded-[4px] group m-4">
              <InputAutoComplete
                options={[
                  { id: "Buyer", label: "მომხმარებელი" },
                  { id: "Seller", label: "მიმწოდებელი" },
                ]}
                label="როლი *"
                {...form.getInputProps("role")}
              />
            </div>

            <div className="relative rounded-[4px] group m-4">
              <InputText label="სახელი *" {...form.getInputProps("name")} />
            </div>
            <div className="relative rounded-[4px] group m-4">
              <InputText label="გვარი *" {...form.getInputProps("surname")} />
            </div>
            <div className="relative rounded-[4px] group p-4">
              <InputText label="მობილური" type="number" {...form.getInputProps("phone")} />
            </div>
            <div className="relative rounded-[4px] group p-4">
              <InputText label="ელ. ფოსტა *" {...form.getInputProps("email")} />
            </div>
            <div className="relative rounded-[4px] group p-4">
              <InputText type="password" {...form.getInputProps("password")} label="პაროლი *" />
            </div>
            <Buttons type="submit" text="რეგისტრაცია" />
          </form>
        </div>
      </div>
    </div>
  );
}

Register.Layout = Layout;
