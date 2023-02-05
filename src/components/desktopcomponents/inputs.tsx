import { Autocomplete, createTheme, Select, SxProps, TextField } from "@mui/material";

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
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string;
  requried?: boolean;
  disabled?: boolean;
  label?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputAutoComplete({ className, options, label, onChange, value, key,  }: InputAutoCompleteProps) {
  return (
    <div className="w-[100%] mr-auto ml-auto ring-1 ring-[#C2C2C2] rounded hover:ring-black focus-within:ring-2 focus-within:ring-black">
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

export function InputText({ onChange, label, multiline, rows, placeholder, requried, value, disabled, defaultValue }: InputTextFieldProps) {
  return (
    <div className="w-[100%] mr-auto ml-auto ring-1 ring-[#C2C2C2] rounded hover:ring-black focus-within:ring-2 focus-within:ring-black">
      <TextField
        required={requried}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-[100%]"
        id="outlined-multiline-static"
        placeholder={placeholder}
        label={label}
        multiline={multiline}
        rows={rows}
        variant="filled"
      ></TextField>
    </div>
  );
}
