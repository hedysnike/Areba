import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Layoutlogged } from "@/hooks/Layoutlogged";
import { Autocomplete, Chip, createTheme, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const completetheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "transparent",
            border: "1px solid #E0E0E0",
          },
          "&:focus-within": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiAutocomplete-inputRoot": {
            backgroundColor: "transparent",
            border: "1px solid #E0E0E0",
          },
          "&:focus": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

const theme = createTheme({
  components: {
    MuiSelect: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            border: "1px solid #E0E0E0",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
});

export default function Add() {
  return (
    <div className="w-3/4 max-w-6xl min-h-[75vh] h-auto ml-auto mr-auto">
      <h1 className="flex flex-col items-center my-[52px]">
        <FormControl variant="filled" sx={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}>
          <InputLabel>ნაწილის მდგომარეობა</InputLabel>
          <Select theme={theme} variant="filled">
            <MenuItem value={5}>ახალი</MenuItem>
            <MenuItem value={4}>მეორადი</MenuItem>
            <MenuItem value={3}>ახალიც და მეორადიც</MenuItem>
          </Select>
        </FormControl>
        <div className="w-full mt-5">
          <Autocomplete
            id="tags-filled"
            sx={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}
            options={Makes.map((make) => make.title)}
            theme={completetheme}
            renderTags={(value, getTagProps) =>
              value.map((make, index) => (
                <Chip variant="outlined" size="small" key={make.id} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
                {...params}
                variant="filled"
                label="აირჩიეთ მარკა"
              />
            )}
          />
        </div>
        <div className="w-full mt-5">
          <Autocomplete
            id="tags-filled"
            sx={{ width: "95%", marginRight: "auto", marginLeft: "auto" }}
            options={Models.map((model) => model.title)}
            theme={completetheme}
            renderTags={(value, getTagProps) =>
              value.map((model, index) => (
                <Chip variant="outlined" size="small" key={model.id} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
                {...params}
                variant="filled"
                label="აირჩიეთ მოდელი"
              />
            )}
          />
        </div>
        <div className="w-[95%] mr-auto ml-auto mt-5">
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <InputLabel>აირჩიეთ წელი</InputLabel>
            <Select theme={theme} variant="filled">
              <MenuItem value={2}>მეორადი</MenuItem>
              <MenuItem value={1}>ახალიც და მეორადიც</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="w-[95%] mt-5">
          <TextField
            theme={completetheme}
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
          <TextField
            theme={completetheme}
            className="w-[100%]"
            id="outlined-multiline-static"
            label="VIN კოდი"
            variant="filled"
          />
        </div>
        <button className="bg-[#FF7600] px-4 py-2 flex justify-start text-white mt-5 rounded text-sm">დამატება</button>
      </h1>
    </div>
  );
}

Add.Layout = Layoutlogged;
