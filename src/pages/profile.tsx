import { Layout } from "@/hooks/Layout";
import { Layoutlogged } from "@/hooks/Layoutlogged";
import { Icon } from "@iconify/react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function Profile() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="min-h-screen h-auto bg-[#E0E0E0] text-black">
      <div className="flex w-[75%] ml-auto mr-auto py-6">
        <div className="w-[26%] h-full bg-white min-h-[80vh] border-r border-solid border-opacity-20 border-black">
          <div className="flex-row flex items-center bg-[#F5F5F5] py-[8px]">
            <Icon
              icon="ic:baseline-person"
              color="#FF7600"
              width="35"
              height="35"
              className="p-2 bg-white rounded-full "
            />
            <h1 className="pl-4">პირადი გვერდი</h1>
          </div>
          <div className="p-4 text-sm hover:bg-[#F5F5F5] flex flex-row w-full">
            <h1 className="w-[80%]">პირადი ინფორმაცია</h1>
            <div className="w-[20% justify-ed]" >
            <Icon icon="ic:baseline-chevron-right" color="#757575" width="20" height="20" />
            </div>
          </div>
          <div className="p-4 text-sm hover:bg-[#F5F5F5] flex flex-row">
            <h1>ჩემი განცხადებები</h1>
            <Icon icon="mdi:clipboard-outline" width={24} height={24} className="text-[#616161] " />
          </div>
        </div>
        <div className="w-[74%] h-full bg-white min-h-[80vh]">
          <div className="bg-[#EEEEEE] px-4 py-[9px] text-sm shadow-b flex items-center flex-row shadow-md shadow-[#b2b2b2]">
            <Icon icon="ic:baseline-person" color="black" width="32" height="32" />{" "}
            <h2 className="pl-4">პირადი ინფორმაცია</h2>
          </div>
          <div className="">
            <div className="w-full p-3 mt-5 text-sm border">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">ქვეყანა</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.Layout = Layoutlogged;
