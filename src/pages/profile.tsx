import { InputSelect } from "@/components/desktopcomponents/inputs";
import { Layout } from "@/hooks/Layout";
import { Layoutlogged } from "@/hooks/Layoutlogged";
import { useUser } from "@/hooks/useUser";
import { Icon } from "@iconify/react";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Profile() {
  const [age, setAge] = useState("");
  const { user, isLoggedIn } = useUser();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-[90vh] h-auto bg-[#E0E0E0] text-black">
      <div className="flex w-3/4 max-w-6xl ml-auto mr-auto py-5 min-h-[80vh] ">
        <div className="w-[26%] min-w-[270px] bg-white border-r border-solid border-opacity-20 border-black">
          <div className="flex-row flex items-center bg-[#F5F5F5] pt-[6px] pb-[8px]">
            <div className="w-[20%] justify-end flex">
              <Icon
                icon="ic:baseline-person"
                color="#FF7600"
                width="35"
                height="35"
                className="p-2 bg-white rounded-full "
              />
            </div>
            <div className="flex justify-center w-[80%]">
              <h1 className="text-xl font-semi-bold">პირადი გვერდი</h1>
            </div>
          </div>
          <div className="p-4 text-sm hover:bg-[#F5F5F5] flex flex-row w-full">
            <h1 className="w-[85%]">პირადი ინფორმაცია</h1>
            <div className="w-[15%] flex justify-center">
              <Icon icon="ic:baseline-chevron-right" color="#757575" width="20" height="20" />
            </div>
          </div>
          <div className="p-4 text-sm hover:bg-[#F5F5F5] flex flex-row">
            <h1 className="w-[85%]">ჩემი განცხადებები</h1>
            <div className="w-[15%] flex justify-center">
              <Icon icon="mdi:clipboard-outline" width={22} height={22} className="text-[#616161] " />
            </div>
          </div>
        </div>
        <div className="w-[74%] bg-white">
          <div className="bg-[#EEEEEE] px-4 py-[9px] text-sm shadow-b flex items-center flex-row shadow-md shadow-[#b2b2b2]">
            <Icon icon="ic:baseline-person" color="black" width="32" height="32" />{" "}
            <h2 className="pl-4">პირადი ინფორმაცია</h2>
          </div>

          <div className="w-full p-[14px] text-sm">
            <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
              <InputLabel>ქვეყანა</InputLabel>
              <Select variant="filled" defaultChecked>
                <MenuItem selected disabled value="">
                  ქვეყანა
                </MenuItem>
              </Select>
            </FormControl>
            <div className="mt-5"></div>
            {/* <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
              <InputLabel>ქალაქი</InputLabel>
              <Select variant="filled">
                <MenuItem selected disabled value="">
                  ქალაქი
                </MenuItem>
              </Select>
            </FormControl> */}
            <InputSelect />
            <div className="mt-5"></div>
            <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
              <TextField required variant="filled" value={user?.name} label="სახელი" />
              <div className="mt-5"></div>
              <TextField required variant="filled" value={user?.surname} label="გვარი" />
              <div className="mt-5"></div>
              <TextField
                required
                value={user?.phone}
                variant="filled"
                label="მობილური"
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">+995</InputAdornment>,
                }}
              />
              <div className="mt-5"></div>
              <TextField variant="filled" label={user?.email} disabled />
            </FormControl>
          </div>
          <div className="pt-4">
            <button className="text-sm bg-[#FF7600] text-white rounded py-2 px-[14px] ml-4 mb-8">
              <h1>შენახვა</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.Layout = Layoutlogged;
