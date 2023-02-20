import { addSupportedModel, deleteSupport } from "@/lib/api";
import { FormControl, InputLabel, MenuItem, Select, Switch } from "@mui/material";
import { useState } from "react";
import { NativeSelect } from "@mantine/core";

export function SettingsMap({ title, id }: { title: string; id: string }) {
  const [checked, setChecked] = useState<boolean>(false);
  const [startingYear, setStartingYear] = useState<number>(2000);
  const [endingYear, setEndingYear] = useState<number>(2023);

  const years = Array.from({ length: 55 }, (_, i) => 2023 - i);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === false) {
      setChecked(true);
      addSupportedModel({
        startingyear: startingYear,
        endingyear: endingYear,
        model: title,
      });
    } else {
      setChecked(false);
      deleteSupport(title);
    }
  };

  return (
    <div className="flex justify-between my-2 text-base">
      <div className="w-[31%]">{title} </div>
      <FormControl variant="standard" sx={{ m: 0, minWidth: 120, width: "27%" }} size="small">
        <InputLabel id="demo-simple-select-standard-label">დან</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={startingYear}
          onChange={(e) => setStartingYear(Number(e?.target.value))}
        >
          {years.map((y) => (
            <MenuItem key={y} value={y}>
              {y}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 0, minWidth: 120, width: "27%" }} size="small">
        <InputLabel id="demo-simple-select-standard-label">მდე</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={endingYear}
          onChange={(e) => setEndingYear(Number(e?.target.value))}
        >
          {years.map((y) => (
            <MenuItem key={y} value={y}>
              {y}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="w-[9%] flex justify-end">
        <Switch checked={checked} onChange={handleChange} />
      </div>
    </div>
  );
}




{
  /* <NativeSelect
data={years.map((y) => ({ id: y.toString(), label: y.toString() }))}
value={endingYear}
onChange={(e) => setEndingYear(Number(e?.target.value))}
className="w-[30%] px-1"
/> */
}

{/* <NativeSelect
data={years.map((y) => ({ id: y.toString(), label: y.toString() }))}
value={startingYear}
onChange={(e) => setStartingYear(Number(e?.target.value))}
className="w-[30%] px-1"
/> */}
