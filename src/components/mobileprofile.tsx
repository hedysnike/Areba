import { useUser } from "@/hooks/useUser";
import { Icon } from "@iconify/react";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { InputText } from "./inputs";

export function MobileProfile() {
  const { user, isLoggedIn } = useUser();

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-[90vh] h-auto bg-white text-black py-[60px] flex items-center justify-center w-full">
      <div className=" min-h-[80vh] w-full">
        <div className="bg-[#EEEEEE] w-full py-[9px] text-sm shadow-b flex items-center flex-row shadow-md shadow-[#b2b2b2]">
          <Icon className="ml-5" icon="ic:baseline-person" color="black" width="32" height="32" />{" "}
          <h2 className="pl-4">პირადი ინფორმაცია</h2>
        </div>

        <div className="w-full p-[14px] text-sm">
          <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <InputLabel>ქვეყანა</InputLabel>
            <Select defaultValue="საქართველო" variant="filled" defaultChecked>
              <MenuItem selected disabled value="საქართველო">
                საქართველო
              </MenuItem>
            </Select>
          </FormControl>
          <div className="mt-5"></div>
          <FormControl variant="filled" sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <InputLabel>ქალაქი</InputLabel>
            <Select defaultValue="თბილისი" variant="filled">
              <MenuItem selected disabled value="თბილისი">
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
  );
}
