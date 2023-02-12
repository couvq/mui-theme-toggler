import React from "react";
import { useContext } from "react";
import {
  AppBar,
  Paper,
  Box,
  Card,
  Switch,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ColorModeContext from "./context/ColorModeContext";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);
  return (
    <>
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
            <Stack direction="row" spacing={2}>
              <Typography>Admin Page</Typography>
              <Link to="/">
                <Typography>Landing Page</Typography>
              </Link>
            </Stack>
            <Switch
              color="primary"
              onChange={() => {
                if (colorMode === "light") {
                  setColorMode("dark");
                } else {
                  setColorMode("light");
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
    </>
  );
};

export default AdminPage;
