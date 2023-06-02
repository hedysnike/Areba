import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Buttons } from '@/components/buttons';
import { Input, TextField } from '@mui/material';
import { login, register } from '@/lib/api';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/useUser';
import { useTranslation } from 'next-i18next';
import { useForm } from '@mantine/form';
import { InputAutoComplete, InputText } from '@/components/inputs';
import { IMaskInput } from 'react-imask';
import { Role } from "@prisma/client";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Loginn() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { retry } = useUser();
  const { t } = useTranslation("common");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "აუცილებელია ველის შევსება"),
      password: (value) => (value.length > 5 ? null : "აუცილებელია ველის შევსება"),
    },
  });

  const registerform = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
      phone: "",
      role: {} as { id: Role; label: string },
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "აუცილებელია სწორად ველის შევსება .!"),
      name: (value) => (value.length > 1 ? null : "აუცილებელია ველის შევსება .!"),
      surname: (value) => (value.length > 1 ? null : "აუცილებელია ველის შევსება .!"),
      password: (value) => (value.length > 5 ? null : "პაროლი უნდა იყოს სულ მცირე 6 ასო"),
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-[84vh] h-full pb-[50px] bg-[#FFFDF7]">
    <div className="md:w-3/4 max-w-[1050px] w-[90%] mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="grid ml-auto mr-auto h-auto grid-cols-1 w-[90%] ">
          <form
            onSubmit={form.onSubmit((values) => {
              const { email, password } = values;

              login(email, password)
                .then((res) => res.json())
                .then((res) => {
                  if (res.user) {
                    retry();
                    router.push("/profile");
                  }
                });
            })}
          >
            <div className="grid mt-5">
              <TextField label="ელ-ფოსტა *" helperText={form.errors.email} {...form.getInputProps("email")} />
            </div>
            <div className="grid mt-5">
              <TextField
                type="password"
                label="პაროლი *"
                {...form.getInputProps("password")}
                helperText={form.errors.password}
              />
            </div>
            <div className="flex justify-end mt-8">
              <Buttons type="submit" text="შესვლა" />
            </div>
          </form>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="grid w-full h-auto grid-cols-1 bg-white">
          <form
            onSubmit={registerform.onSubmit((values) => {
              const { email, password, name, surname, phone, role } = values;

              register(email, password, name, surname, phone, role.id)
                .then((r) => r.json())
                .then((data) => {
                  if (data.user) {
                    retry();
                    router.push("/profile");
                  }
                });
            })}
          >
            <div className="relative rounded-[4px] group m-4">
              <InputAutoComplete
                options={[
                  { id: "Buyer", label: "მომხმარებელი" },
                  { id: "Seller", label: "მიმწოდებელი" },
                ]}
                label="როლი *"
                {...form.getInputProps("role")}
              />
            </div>

            <div className="relative rounded-[4px] group m-4">
              <InputText label="სახელი *" {...form.getInputProps("name")} />
            </div>
            <div className="relative rounded-[4px] group m-4">
              <InputText label="გვარი *" {...form.getInputProps("surname")} />
            </div>
            <div className="relative rounded-[4px] group p-4">
              <InputText label="მობილური" type="number" {...form.getInputProps("phone")} />
            </div>
            <div className="relative rounded-[4px] group p-4">
              <InputText label="ელ. ფოსტა *" {...form.getInputProps("email")} />
            </div>
            <div className="relative rounded-[4px] group p-4">
              <InputText type="password" {...form.getInputProps("password")} label="პაროლი *" />
            </div>
            <div className="flex justify-end pt-5 pb-10">
              <Buttons type="submit" text="რეგისტრაცია" />
            </div>
          </form>
        </div>
      </TabPanel>
    </Box>
    </div>
    </div>
  );
}