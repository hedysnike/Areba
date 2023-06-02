import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LoginForm } from "@/components/loginform";
import { RegisterForm } from "@/components/registerform";
import Head from "next/head";

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
    <>
      <Head>
        <style type="text/css">
          {`
        .css-1aquho2-MuiTabs-indicator {
          background-color: #ff7600 !important;
        }
        .css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected {
          color: #ff7600 !important;
        }
    .MuiFilledInput-input {
      background-color: #1E1E1E !important;
      color: white;
    }

    .MuiFilledInput-input:focus {
      background-color: #1E1E1E !important  ;
      color: white;
    }
    `}
        </style>
      </Head>

      <div className="min-h-[84vh] h-full pb-[50px] bg-[#FFFDF7]">
        <div className="md:w-3/4 max-w-[1050px] w-[90%] mr-auto ml-auto h-[75vh] mt-5 border border-solid border-[#dcdcdcaf] bg-white">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} variant="fullWidth"
              >
                <Tab label={t("authorization")} className="w-full" {...a11yProps(0)} />
                <Tab label={t("registration")} className="w-full" {...a11yProps(1)} />
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
    </>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
