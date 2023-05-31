import { DefaultValue } from "@mantine/core/lib/MultiSelect/DefaultValue/DefaultValue";
import { Autocomplete, BaseTextFieldProps, SxProps, TextField } from "@mui/material";

interface InputAutoCompleteProps {
  sx?: SxProps;
  key?: string;
  defaultValue?: any;
  className?: string;
  options?: { id: string; label: string }[];
  label?: string;
  value?: any;
  onChange?: (item: { id: string; label: string } | null) => void;
}
interface InputTextFieldProps extends BaseTextFieldProps {
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  defaultValue?: any;
  requried?: boolean;
  disabled?: boolean;
  label?: string;
  value?: any;
  type?: string;
  error?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputAutoComplete({
  className,
  defaultValue,
  options,
  label,
  onChange,
  value,
  key,
  ...props
}: InputAutoCompleteProps) {
  return (
    <div className="w-[100%] mr-auto ml-auto">
      <Autocomplete
        onChange={(e, newValue) => onChange?.(newValue)}
        className={className}
        id="tags-filled"
        sx={{ width: "100%" }}
        options={options || []}
        defaultValue={defaultValue}
        renderInput={(params) => (
          <TextField
            {...props}
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
