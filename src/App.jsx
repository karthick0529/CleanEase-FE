import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Components/Routing/Routing";
import GlobalProvider from "./GlobalContext/GlobalProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Footer from "./Components/Helpers/Footer";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const theme = createTheme();
  const [value, setValue] = useState("/");

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalProvider>
          <Navbar value={value} setValue={setValue}/>
          <Routing />
          <Footer setValue={setValue}/>
        </GlobalProvider>
      </ThemeProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
