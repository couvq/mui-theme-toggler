import { CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from "./context/ColorModeContext";
import Landing from "./Landing";
import AdminPage from "./AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
const HomePageContainer = () => {
  const { colorMode } = useContext(ColorModeContext);

  const darkMode = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e65c4f",
      },
    },
  });

  const lightMode = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e65c4f",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={colorMode === "light" ? lightMode : darkMode}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default HomePageContainer;
