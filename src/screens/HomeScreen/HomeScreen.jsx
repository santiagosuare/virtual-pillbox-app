import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListGroupMedicine from "../../components/MedicineList/MedicineList";
import { useAuth } from "../../components/AuthContext";
import {
  Typography,
  Container,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import Person from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
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
                <Person onClick={() => navigate('/usuario')}/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Mis Medicamentos
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
