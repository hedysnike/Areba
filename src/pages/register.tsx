import { Buttons } from "@/components/desktopcomponents/buttons";
import { LLogin } from "@/components/desktopcomponents/registertoggle";
import { Layout } from "@/hooks/Layout";
import * as api from "@/lib/api";
import { useUser } from "@/hooks/useUser";
import { InputText } from "@/components/desktopcomponents/inputs";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";

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
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "არასწორე იმეილია .!"),
      name: (value) => (value.length > 1 ? null : "შეავსეთ საჭირო ველი .!"),
      phone: (value) => (value.length > 8 ? null : "ნომერი არასწორეა .!"),
      surname: (value) => (value.length > 1 ? null : "შეავსეთ საჭირო ველი .!"),
      password: (value) => (value.length > 5 ? null : "Password must be at least 6 characters"),
    },
  });

  return (
    <div className="min-h-[84vh] h-full">
      <div className="w-3/4 mr-auto ml-auto min-h-[75vh] h-auto mt-5 border border-solid border-[#dcdcdcaf]">
        <div className="h-auto"> {LLogin()}</div>
        <div className="grid w-full h-auto grid-cols-1 bg-white">
          <form
            onSubmit={form.onSubmit((values) => {
              const { email, password, name, surname, phone } = values;

              api
                .register(email, password, name, surname, phone)
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
