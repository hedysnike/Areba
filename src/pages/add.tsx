import { Conditions } from "@/assets/condition";
import { Makes } from "@/assets/makes";
import { Models } from "@/assets/models";
import { Layoutlogged } from "@/hooks/Layoutlogged";
import { Autocomplete, Chip, createTheme, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const completetheme = createTheme({
  components: {
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

const filteredModels = Models.filter((model) => model.make_id === selected?._id).filter((model) =>
    model.title.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  );
export default function Add() {
  return (
    <div className="w-3/4 max-w-6xl min-h-[75vh] h-auto ml-auto mr-auto">
      <h1 className="flex flex-col items-center my-[52px]">
        <FormControl variant="filled" sx={{ width: "95%", marginRight: "auto" }}>
          <InputLabel>ნაწილის მდგომარეობა</InputLabel>
          <Select theme={theme} variant="filled">
            <MenuItem value={5}>ახალი</MenuItem>
            <MenuItem value={4}>მეორადი</MenuItem>
            <MenuItem value={3}>ახალიც და მეორადიც</MenuItem>
          </Select>
        </FormControl>
        <div className="w-full mt-5 hover:">
        <Autocomplete
          id="tags-filled"
          sx={{ width: "95%", marginRight: "auto" }}
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
        <div className="w-full mt-5 hover:">
        <Autocomplete
          id="tags-filled"
          sx={{ width: "95%", marginRight: "auto" }}
          options={filtheredModels.map((make) => make.title)}
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

      </h1>
    </div>
  );
}

Add.Layout = Layoutlogged;
