// import * as React from "react";
// import { Layout } from "@/hooks/Layout";
// import { makeStyles } from "@mui/styles";
// import {
//   Select,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   createTheme,
//   ThemeProvider,
//   Autocomplete,
//   TextField,
//   Chip,
// } from "@mui/material";
// import { Models } from "@/assets/models";
// import { Makes } from "@/assets/makes";
// import { totalmem } from "os";

// const years = Array.from({ length: 50 }, (_, i) => 2023 - i);

// const theme = createTheme({
//   components: {
//     MuiSelect: {
//       variants: [
//         {
//           props: { variant: "filled" },
//           style: {
//             border: "1px solid #E0E0E0",
//             backgroundColor: "transparent",
//             "&:hover": {
//               backgroundColor: "transparent",
//             },
//           },
//         },
//       ],
//     },
//   },
// });

// const completetheme = createTheme({
//   components: {
//     MuiAutocomplete: {
//       styleOverrides: {
//         root: {
//           "& .MuiAutocomplete-inputRoot": {
//             backgroundColor: "transparent",
//             border: "1px solid #E0E0E0",
//           },
//         },
//       },
//     },
//   },
// });


// export default function Examplecomponents() {
//   return (
//     <ThemeProvider theme={theme}>
//       <div className="flex flex-col items-center justify-center w-full min-h-screen">
//         <FormControl variant="filled" sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
//           <InputLabel>Select</InputLabel>
//           <Select variant="filled">
//             {Makes.map((i) => (
//               <MenuItem key={i.id} value={i.title}>
//                 {i.title}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Autocomplete
//           id="tags-filled"
//           options={Makes.map((option) => option.title)}
//           theme={completetheme}
//           sx={{ width: 300 }}
//           renderTags={(value, getTagProps) =>
//             value.map((option, index) => <Chip variant="outlined" size="small" key={option.title} {...getTagProps({ index })} />)
//           }
//           renderInput={(params) => (
//             <TextField {...params} variant="filled" label="Size small" placeholder="Favorites" />
//           )}
//         />
//       </div>
//     </ThemeProvider>
//   );
// }

// Examplecomponents.Layout = Layout;

