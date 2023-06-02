import { register } from "@/lib/api";
import { InputAutoComplete, InputText } from "./inputs";
import { useForm } from "@mantine/form";
import { useTranslation } from "next-i18next";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { Role } from "@prisma/client";
import { Buttons } from "./buttons";

export function RegisterForm() {
  const router = useRouter();
  const { retry } = useUser();
  const { t } = useTranslation("common");

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
      surname: (value) => (value.length > 1 ? null : "აუცილებელია ველის შევსება .!"),
      password: (value) => (value.length > 5 ? null : "პაროლი უნდა იყოს სულ მცირე 6 ასო"),
    },
  });

  return (
    <div className="grid w-full h-auto grid-cols-1 bg-white">
      <form
        onSubmit={form.onSubmit((values) => {
          const { email, password, name, surname, phone, role } = values;

          register(email, password, name, surname, phone, role.id)
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
              { id: "BUYER", label: "მომხმარებელი" },
              { id: "SELLER", label: "მიმწოდებელი" },
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
        <div className="flex justify-end pt-5 pb-10">
          <Buttons type="submit" text="რეგისტრაცია" />
        </div>
      </form>
    </div>
  );
}
