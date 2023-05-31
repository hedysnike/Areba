import * as api from "@/lib/api";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { Role } from "@prisma/client";
import { InputAutoComplete, InputText } from "@/components/inputs";
import { Buttons } from "@/components/buttons";
import { LLogin } from "@/components/registertoggle";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { Input } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return <IMaskInput {...other} mask="500 000 000" definitions={{ "#": /[1-9]/ }} />;
});

export default function Profile({ isMobile }: { isMobile: boolean }) {
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
      surname: (value) => (value.length > 1 ? null : "აუცილებელია ველის შევსება .!"),
      password: (value) => (value.length > 5 ? null : "პაროლი უნდა იყოს სულ მცირე 6 ასო"),
    },
  });

  return (
    <div className="min-h-[84vh] h-full py-[50px] bg-[#FFFDF7] mb-10">
      <div className="md:w-3/4 w-[90%] mr-auto ml-auto min-h-[75vh] h-auto mt-5 border border-solid border-[#dcdcdcaf] bg-white">
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
              <Input name="textmask" {...form.getInputProps("phone")} inputComponent={TextMaskCustom as any} />
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
            <div className="flex justify-end pt-5 pb-10">
              <Buttons type="submit" text="რეგისტრაცია" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
