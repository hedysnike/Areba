import { useUser } from "@/hooks/useUser";
import { Icon } from "@iconify/react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { InputText } from "./desktopcomponents/inputs";

export function ProfilePage() {
  const { user, isLoggedIn } = useUser();


  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-[90vh] h-auto py-[50px] bg-[#E0E0E0] text-black">
    <div className="md:w-3/4 w-[90%] mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
        <div className=" bg-white">
          <div className="bg-[#EEEEEE] w-full px-4 py-[9px] text-sm shadow-b flex items-center flex-row shadow-md shadow-[#b2b2b2]">
            <Icon icon="ic:baseline-person" color="black" width="32" height="32" />{" "}
            <h2 className="pl-4">პირადი ინფორმაცია</h2>
          </div>

          <div className="w-full p-[14px] text-sm">
            <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
              <InputLabel>ქვეყანა</InputLabel>
              <Select variant="filled" defaultChecked>
                <MenuItem selected disabled value="">
                  საქართველო
                </MenuItem>
              </Select>
            </FormControl>
            <div className="mt-5"></div>
            <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
              <InputLabel>ქალაქი</InputLabel>
              <Select variant="filled">
                <MenuItem selected disabled value="">
                  თბილისი
                </MenuItem>
              </Select>
            </FormControl>
            <div className="mt-5"></div>
            <FormControl sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
              <InputText defaultValue={user?.name} label="სახელი" />
              <div className="mt-5"></div>
              <InputText defaultValue={user?.surname} label="გვარი" />
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
              <InputText label={user?.email} disabled />
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