import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Buttons } from "@/components/desktopcomponents/buttons";
import { InputAutoComplete, InputText } from "@/components/desktopcomponents/inputs";
import { Layout } from "@/hooks/Layout";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Requests } from "@prisma/client";
import { useUser } from "@/hooks/useUser";

export default function Add() {
  const [selected, setSelected] = useState<typeof Makes[number]>();
  const [selectedModels, setSelectedModels] = useState<typeof Models[number]>();

  console.log("selected", selected);

  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  const filterModels = Models as Array<typeof Models[number]>;
  const filteredModels = filterModels.filter((model) => model.make_id === selected?._id);

  return (
    <div className="w-3/4 max-w-6xl min-h-[75vh] h-auto ml-auto mr-auto">
      <h1 className="flex flex-col items-center my-[52px]">
        <FormControl variant="filled" sx={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}>
          <InputLabel>ნაწილის მდგომარეობა</InputLabel>
          <Select variant="filled">
            <MenuItem value={5}>ახალი</MenuItem>
            <MenuItem value={4}>მეორადი</MenuItem>
            <MenuItem value={3}>ახალიც და მეორადიც</MenuItem>
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
          <InputAutoComplete label="აირჩიეთ მოდელი" options={filteredModels.map((model) => model.title)} />
        </div>
        <div className="w-[95%] mr-auto ml-auto mt-5">
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <InputLabel>აირჩიეთ წელი</InputLabel>
            <Select variant="filled">
              <MenuItem value={2}>მეორადი</MenuItem>
              <MenuItem value={1}>ახალიც და მეორადიც</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-[95%] mt-5">
          <InputText
            multiline
            rows={4}
            label="დეტალური ინფორმაცია"
            placeholder="შეიყვანეთ დეტალური ინფორმაცია ნაწილის შესახებ"
          />
        </div>
        <div className="w-[95%] mt-5">
          <InputText label="VIN კოდი" />
        </div>
        <div className="mt-5">
          <Buttons text="დამატება" />
        </div>
      </h1>
    </div>
  );
}

Add.Layout = Layout;
