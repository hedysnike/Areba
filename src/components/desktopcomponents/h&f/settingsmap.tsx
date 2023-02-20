import { addSupportedModel, deleteSupport } from "@/lib/api";
import { Switch } from "@mui/material";
import { useState } from "react";
import { InputAutoComplete } from "../inputs";

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
      <div className="">{title} </div>

      <InputAutoComplete
        sx={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
        label="აირჩიეთ წელი"
        value={startingYear}
        defaultValue={startingYear}
        onChange={(e) => setStartingYear(Number(e?.label))}
        options={years.map((y) => ({ id: y.toString(), label: y.toString() }))}
      />
      <InputAutoComplete
        sx={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
        label="აირჩიეთ წელი"
        value={endingYear}
        defaultValue={endingYear}
        onChange={(e) => setEndingYear(Number(e?.label))}
        options={years.map((y) => ({ id: y.toString(), label: y.toString() }))}
      />
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
}
