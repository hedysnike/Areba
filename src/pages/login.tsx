import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LoginForm } from "@/components/loginform";
import { RegisterForm } from "@/components/registerform";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Loginn() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation("common");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-[84vh] h-full pb-[50px] bg-[#FFFDF7]">
      <div className="md:w-3/4 max-w-[1050px] w-[90%] mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" textColor="secondary" indicatorColor="secondary">
              <Tab label="Login" className="w-full" {...a11yProps(0)} />
              <Tab label="Register" className="w-full" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <LoginForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RegisterForm />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
