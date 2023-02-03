import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { InputAutoComplete } from "@/components/desktopcomponents/inputs";
import { Layoutlogged } from "@/hooks/Layoutlogged";
import { ThemeProvider } from "@emotion/react";
import { Autocomplete, Chip, createTheme, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Theme } from "@/components/desktopcomponents/inputs";

export default function Add() {
  return (
    <ThemeProvider theme={Theme}>
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
          <div className="w-full mt-5">
            <InputAutoComplete  label="აირჩიეთ მარკა" options={Makes.map((make) => make.title)} />
          </div>
          <div className="w-full mt-5">
            <InputAutoComplete label="აირჩიეთ მოდელი" options={Models.map((model) => model.title)} />
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
            <TextField
              className="w-[100%]"
              id="outlined-multiline-static"
              label="დეტალური ინფორმაცია"
              placeholder="შეიყვანეთ დეტალური ინფორმაცია ნაწილის შესახებ"
              multiline
              rows={4}
              variant="filled"
            />
          </div>
          <div className="w-[95%] mt-5">
            <TextField className="w-[100%]" id="outlined-multiline-static" label="VIN კოდი" variant="filled" />
          </div>
          <button className="bg-[#FF7600] px-4 py-2 flex justify-start text-white mt-5 rounded text-sm">
            დამატება
          </button>
        </h1>
      </div>
    </ThemeProvider>
  );
}

Add.Layout = Layoutlogged;
