import { Autocomplete, SxProps, TextField } from "@mui/material";

interface InputAutoCompleteProps {
  sx?: SxProps;
  key?: string;
  className?: string;
  options?: { id: string; label: string }[];
  label?: string;
  value?: any;
  onChange?: (item: { id: string; label: string } | null) => void;
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
  type?: string;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputAutoComplete({ className, options, label, onChange, value, key }: InputAutoCompleteProps) {
  return (
    <div className="w-[100%] mr-auto ml-auto">
      <Autocomplete
        onChange={(e, newValue) => onChange?.(newValue)}
        className={className}
        id="tags-filled"
        sx={{ width: "100%" }}
        options={options || []}
        renderInput={(params) => (
          <TextField
            value={value}
            key={key}
            sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
            {...params}
            label={label}
          />
        )}
      />
    </div>
  );
}

export function InputText({
  onChange,
  label,
  multiline,
  rows,
  placeholder,
  requried,
  value,
  disabled,
  defaultValue,
  type,
  error,
}: InputTextFieldProps) {
  return (
    <div className="w-[100%] mr-auto ml-auto">
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
        type={type}
        error={error}
      ></TextField>
    </div>
  );
}
