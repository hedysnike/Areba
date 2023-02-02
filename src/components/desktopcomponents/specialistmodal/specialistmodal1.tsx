import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Layout } from "@/hooks/Layout";
import { MobileDatePicker } from "@mui/x-date-pickers";

export function SpecialistModal1() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2023-01-30T21:11:54"));

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col w-full mb-6 duration-300 animate-in slide-in-from-left">
      <div className="relative mx-6 mt-6 mb-4 group pb-11">
        <input
          type="text"
          className="pt-5 rounded-[4px] pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-out focus:ring-[#383838] hover:ring-[#383838] placeholder-shown:z-0 z-20"
          placeholder=" "
        />
        <h2 className="pl-2 pt-[14px] text-xs -translate-y-[10px] ease-out duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#333] absolute pointer-events-none z-20">
          ჩაწერეთ რისი გაკეთება გსურთ მანქანაზე?
        </h2>
      </div>
      <div className="relative mx-6 mt-4 mb-4 group pb-11">
        <input
          type="text"
          className="pt-5 rounded-[4px] pb-3 pl-2 w-full font-normal peer text-sm leading-6 absolute outline-none ring-1 ring-solid  ring-[#C2C2C2] hover:ring-1 focus:ring-2 hover:delay-[100ms] hover:transition-all ease-in focus:ring-[#383838] hover:ring-[#383838] placeholder-shown:z-0 z-20"
          placeholder=" "
        />
        <h2 className="pl-2 pt-[14px] text-xs -translate-y-[10px] ease-out duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-[10px] m-[1px] transition-all peer-focus:text-xs text-[#9b9b9b] peer-focus:text-[#333] absolute pointer-events-none z-20">
          ჩაწერეთ სად მოვიდეს სპეციალისტი
        </h2>
      </div>
      <div className="flex w-full ">
        <div className="relative rounded-[4px] group my-4 ml-6 mr-0   w-[60%]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              className="w-full"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="relative rounded-[4px] group my-4 ml-2 mr-6 w-[40%]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Time"
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

SpecialistModal1.Layout = Layout;
