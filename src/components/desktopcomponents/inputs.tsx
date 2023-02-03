import { Autocomplete, createTheme, Select, SxProps, TextField, ThemeProvider } from "@mui/material";

interface InputAutoCompleteProps {
  sx?: SxProps;
  key?: string;
  className?: string;
  options?: string[];
  label?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface InputTextFieldProps {
  label?: string;
}

export const Theme = createTheme({
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "& .MuiFilledInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          ":-moz-focusring": {
            color: "transparent",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiAutocomplete-inputRoot": {
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

export function InputAutoComplete({ className, options, label, onChange, value, key }: InputAutoCompleteProps) {
  return (
    <div className="w-[100%] mr-auto ml-auto ring-1 ring-[#C2C2C2] rounded hover:ring-black focus-within:ring-2 focus-within:ring-black">
      <ThemeProvider theme={Theme}>
        <Autocomplete
          className={className}
          id="tags-filled"
          sx={{ width: "100%" }}
          options={options || []}
          renderInput={(params) => (
            <TextField
              value={value}
              onChange={onChange}
              key={key}
              sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
              {...params}
              variant="filled"
              label={label}
            />
          )}
        />
      </ThemeProvider>
    </div>
  );
}

export function InputSelect({ className, options, label, value, onChange }: InputAutoCompleteProps) {
  return (
    <div>
      <Select></Select>
      <div></div>
    </div>
  );
}

export function InputText({ label }: InputTextFieldProps) {
  return (
    <ThemeProvider theme={Theme}>
    <div className="w-[100%] mr-auto ml-auto ring-1 ring-[#C2C2C2] rounded hover:ring-black focus-within:ring-2 focus-within:ring-black">
        <TextField className="w-[100%]" id="outlined-multiline-static" label={label} variant="filled"></TextField>
      </div>
    </ThemeProvider>
  );
}


