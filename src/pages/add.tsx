import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Buttons } from "@/components/desktopcomponents/buttons";
import { InputAutoComplete, InputText } from "@/components/desktopcomponents/inputs";
import { useUser } from "@/hooks/useUser";
import { createRequests } from "@/lib/api";
import { useForm } from "@mantine/form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";


export default function Login() {
  const router = useRouter();
  
  const form = useForm({
    initialValues: {
      type: { id: "", label: "" },
      make: { id: "", label: "" },
      model: { id: "", label: "" },
      year: { id: "", label: "" },
      details: "",
    },
    validate: {
      type: (value) => (value.label.length < 2 ? 'შეავსეთ საჭირო ველი' : null),
      year: (value) => (Number(value.label) > 1970 ? null : "შეავსეთ საჭირო ველი"),
      make: (value) => (value.label.length < 2 ? 'შეავსეთ საჭირო ველი' : null),
      model: (value) => (value.label.length < 2 ? 'შეავსეთ საჭირო ველი' : null),
      details: (value) => (value.length < 2 ? 'შეავსეთ საჭირო ველი' : null),
    },
  });


  const { user } = useUser();

  const filterModels = Models as Array<typeof Models[number]>;
  const filteredModels = filterModels.filter((model) => model.make_id === form.values.make?.id);

  const years = Array.from({ length: 55 }, (_, i) => 2023 - i);

  return (
    <div className="bg-[#FFFDF7] py-[52px]">
      <div className="w-3/4 min-h-[75vh] h-auto ml-auto mr-auto">
        <h1 className="flex flex-col items-center">
          <form
            className="w-full"
            onSubmit={form.onSubmit((values) => {
              const { make, model, details, type, year } = values;

              if (!make || !model) return;
              if (!user) return;
              if (!details) return;
              if (!type) return;
              if (!year) return;

              createRequests({
                make: make.label,
                model: model.label,
                userId: user?._id,
                details: details,
                type: type.label,
                year: Number(year.label), 
              }).then((res) => {
                  router.push("/requests");
              });

            })}
          >
            <h1 className="justify-center mb-10 text-xl text-center">
              დაამატეთ თქვენთვის სასურველი ნაწილის ან სერვისის განცხადება.
            </h1>
            <div className="w-[95%] mt-5">
              <InputAutoComplete
                label="ნაწილის მდგომარეობა"
                options={[
                  { id: "ახალი", label: "ახალი" },
                  { id: "მეორადი", label: "მეორადი" },
                  { id: "ახალიც და მეორადიც", label: "ახალიც და მეორადიც" },
                ]}
                {...form.getInputProps("type")}
              ></InputAutoComplete>
            </div>
            <div className="w-[95%] mt-5">
              <InputAutoComplete
                label="აირჩიეთ მარკა"
                options={Makes.map((make) => ({ id: make._id, label: make.title }))}
                {...form.getInputProps("make")}
              />
            </div>
            <div className="w-[95%] mt-5">
              <InputAutoComplete
                {...form.getInputProps("model")}
                label="აირჩიეთ მოდელი"
                options={filteredModels.map((model) => ({ id: model._id, label: model.title }))}
              />
            </div>
            <div className="w-[95%] mt-5">
              <InputAutoComplete
                {...form.getInputProps("year")}
                sx={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
                label="აირჩიეთ წელი"
                options={years.map((y) => ({ id: y.toString(), label: y.toString() }))}
              ></InputAutoComplete>
            </div>
            <div className="w-[95%] mt-5">
              <InputText
                helperText={form.errors.email}
                multiline
                rows={4}
                label="დეტალური ინფორმაცია"
                placeholder="შეიყვანეთ დეტალური ინფორმაცია ნაწილის შესახებ"
                {...form.getInputProps("details")}
              />
            </div>
            <div className="w-[95%] mt-5">
              <InputText label="VIN კოდი" />
            </div>
            <div className="mt-5">
              <Buttons type="submit" text="დამატება" />
            </div>
          </form>
        </h1>
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