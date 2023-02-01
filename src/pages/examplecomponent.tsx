import * as React from "react";
import { Layout } from "@/hooks/Layout";
import { makeStyles } from "@mui/styles";
import { Select, FormControl, InputLabel, MenuItem, createTheme, ThemeProvider } from "@mui/material";
import { Models } from "@/assets/models";
import { Makes } from "@/assets/makes";

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

export default function Examplecomponents() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <FormControl variant="filled" sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <InputLabel>Select</InputLabel>
          <Select variant="filled">
            {Models.map((i) => (
              <MenuItem key={i.id} value={i.title}>
                {i.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <InputLabel>Select</InputLabel>
          <Select variant="filled">
            {Models.map((i) => (
              <MenuItem key={i.id} value={i.title}>
                {i.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>
    </ThemeProvider>
  );
}

Examplecomponents.Layout = Layout;
