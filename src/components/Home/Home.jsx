import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListGroupMedicine from "../Medicine/ListGroupMedicine";
import { useAuth } from "../AuthContext";
import {
  Typography,
  Container,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import House from '@mui/icons-material/House';

const theme = createTheme();

const Home = () => {
  const { logout } = useAuth();
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1}} style={{marginBottom: '1rem'}}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <House />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Rutina para hoy
              </Typography>
              <Button color="inherit" onClick={logout}>Salir</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Container component="main" maxWidth="xs">
          <ListGroupMedicine />
        </Container>
    </ThemeProvider>
  );
};

export default Home;
