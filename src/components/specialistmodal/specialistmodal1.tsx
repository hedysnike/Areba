import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Layout } from "@/hooks/Layout";
import { InputText } from "../inputs";

export function SpecialistModal1() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2023-01-30T21:11:54"));

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col w-full px-6 mb-6">
      <div className="mt-6 mb-4">
        <InputText label="ჩაწერეთ რისი გაკეთება გსურთ მანქანაზე?" />
      </div>
      <div className="mb-5">
        <InputText label="ჩაწერეთ სად მოვიდეს სპეციალისტი?" />
      </div>
      <div className="flex w-full mb-4">
        <div className="relative rounded-[4px] mr-0   w-[60%]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="წელი/თვე/რიცხვი"
              inputFormat="MM/DD/YYYY"
              className="w-full"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="relative rounded-[4px] ml-2 w-[40%]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="საათი:წუთი"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}

