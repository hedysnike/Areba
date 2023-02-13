import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Buttons } from "@/components/desktopcomponents/buttons";
import { InputAutoComplete, InputText } from "@/components/desktopcomponents/inputs";
import { Layout } from "@/hooks/Layout";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { createRequests, getRequests } from "@/lib/api";
import { Requests } from "@prisma/client";
import { getRequestMeta } from "next/dist/server/request-meta";

export default function Add() {
  const [selected, setSelected] = useState<typeof Makes[number]>();
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedModels, setSelectedModels] = useState<typeof Models[number]>();
  const [inputDetails, setInputDetails] = useState<string>();
  const [inputYear, setInputYear] = useState<number>();

  const { user } = useUser();

  console.log(selectedType);

  const filterModels = Models as Array<typeof Models[number]>;
  const filteredModels = filterModels.filter((model) => model.make_id === selected?._id);

  const years = Array.from({ length: 50 }, (_, i) => 2023 - i);

  return (
    <div className="w-3/4 max-w-6xl min-h-[75vh] h-auto ml-auto mr-auto">
      <h1 className="flex flex-col items-center my-[52px]">
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
        <div className="w-[95%] mr-auto ml-auto mt-5">
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <InputLabel>აირჩიეთ წელი</InputLabel>
            <Select
              variant="filled"
              onChange={(e) => {
                setInputYear(parseInt(e.target.value));
              }}
              value={inputYear?.toString()}
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
      </h1>
    </div>
  );
}

Add.Layout = Layout;
