import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Buttons } from "@/components/desktopcomponents/buttons";
import { InputAutoComplete, InputText } from "@/components/desktopcomponents/inputs";
import { Layout } from "@/hooks/Layout";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { createRequests, getRequests } from "@/lib/api";
import { useForm } from "@mantine/form";
import { Requests } from "@prisma/client";

export default function Add() {
  const [selected, setSelected] = useState<typeof Makes[number]>();
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedModels, setSelectedModels] = useState<typeof Models[number]>();
  const [inputDetails, setInputDetails] = useState<string>();
  const [inputYear, setInputYear] = useState<number>();

  const form = useForm({
    initialValues: {
      type: "",
      makes: "",
      models: "",
      details: "",
      year: "",
      vin: "",
    },
    validate: {
      type: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      makes: (value) => (value.length > 2 ? null : "Password must be at least 6 characters"),
      models: (value) => (value.length > 2 ? null : "შეავსეთ საჭირო ველი"),
    },
  });


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 11;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 8.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
    

  const { user } = useUser();

  console.log(selectedType);

  const filterModels = Models as Array<typeof Models[number]>;
  const filteredModels = filterModels.filter((model) => model.make_id === selected?._id);

  const years = Array.from({ length: 55 }, (_, i) => 2023 - i);

  return (
    <div className="bg-[#FFFDF7] py-[52px]">
    <div className="w-3/4 min-h-[75vh] h-auto ml-auto mr-auto">
      <h1 className="flex flex-col items-center">
        <form className="w-full">
          <h1 className="justify-center mb-10 text-xl text-center"> დაამატეთ თქვენთვის სასურველი ნაწილის ან სერვისის განცხადება. </h1>
          <FormControl variant="filled" sx={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}>
            <InputLabel>ნაწილის მდგომარეობა</InputLabel>
            <Select
              onChange={(e) => {
                setSelectedType(e.target.value as string);
              }}
              variant="filled"
            >
              <MenuItem value={"ახალი"}>ახალი</MenuItem>
              <MenuItem value={"მეორადი"}>მეორადი</MenuItem>
              <MenuItem value={"ახალიც და მეორადიც"}>ახალიც და მეორადიც</MenuItem>
            </Select>
          </FormControl>
          <div className="w-[95%] mt-5">
            <InputAutoComplete
              label="აირჩიეთ მარკა"
              options={Makes.map((make) => ({ id: make._id, label: make.title }))}
              value={selected}
              onChange={(e) => {
                setSelected(Makes.find((m) => m._id === e?.id));
              }}
            />
          </div>
          <div className="w-[95%] mt-5">
            <InputAutoComplete
              label="აირჩიეთ მოდელი"
              options={filteredModels.map((model) => ({ id: model._id, label: model.title }))}
              onChange={(e) => {
                setSelectedModels(filteredModels.find((m) => m._id === e?.id));
              }}
            />
          </div>
          <div className="w-[95%] mt-5">
          <FormControl sx={{ width: "100%"}}>
            <InputLabel>აირჩიეთ წელი</InputLabel>
            <Select
            sx={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
              label="აირჩიეთ წელი"
              onChange={(e) => {
                setInputYear(parseInt(e.target.value));
              }}
              value={inputYear?.toString()}
              MenuProps={MenuProps}
            >
              {years.map((year) => (
                // eslint-disable-next-line react/jsx-key
                <MenuItem value={year}>{year}</MenuItem>
              ))}
            </Select>
            </FormControl>
          </div>
          <div className="w-[95%] mt-5">
            <InputText
              multiline
              rows={4}
              label="დეტალური ინფორმაცია"
              placeholder="შეიყვანეთ დეტალური ინფორმაცია ნაწილის შესახებ"
              onChange={(e) => {
                setInputDetails(e.target.value as string);
              }}
            />
          </div>
          <div className="w-[95%] mt-5">
            <InputText label="VIN კოდი" />
          </div>
          <div className="mt-5">
            <Buttons
              text="დამატება"
              onClick={(e) => {
                if (!selected || !selectedModels) return;
                if (!user) return;
                if (!inputDetails) return;
                if (!selectedType) return;
                if (!inputYear) return;
                console.log(inputDetails);
                createRequests({
                  make: selected?.title,
                  model: selectedModels?.title,
                  userId: user?._id,
                  details: inputDetails,
                  type: selectedType,
                  year: inputYear,
                });
              }}
            />
          </div>
        </form>
      </h1>
    </div>
    </div>

  );
}

Add.Layout = Layout;
