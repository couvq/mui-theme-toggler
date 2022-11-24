import {
  AppBar,
  Paper,
  Box,
  Card,
  Switch,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";
import React, { useContext } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from "./context/ColorModeContext";

const HomePageContainer = () => {
  const theme = useTheme();
  const { colorMode, setColorMode } = useContext(ColorModeContext);

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
        <Paper
          data-testid="app"
          sx={{
            minHeight: "100vh",
          }}
        >
          <AppBar>
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Theme toggler example</Typography>
              <Switch 
              color="primary"
              onChange={() => {
                  if(colorMode === "light") {
                      setColorMode("dark")
                  } else {
                      setColorMode("light")
                  }
              }}
              />
            </Toolbar>
          </AppBar>

          <Box paddingTop={10}>
            <Card
              sx={{
                maxWidth: 350,
                margin: 2,
                padding: 2,
              }}
            >
              Here is a card
              <Button variant="contained">Press me</Button>
            </Card>
            <Card
              sx={{
                maxWidth: 350,
                margin: 2,
                padding: 2,
              }}
            >
              Here is a card
              <Button variant="contained">Press me</Button>
            </Card>
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default HomePageContainer;
