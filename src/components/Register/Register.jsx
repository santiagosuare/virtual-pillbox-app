import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Crear una cuenta
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="id"
                            name="dni"
                            required
                            fullWidth
                            id="dni"
                            label="DNI"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="nombre"
                            required
                            fullWidth
                            id="nombre"
                            label="Nombre"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="apellido"
                            label="Apellido"
                            name="apellido"
                            autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Correo electrónico"
                            name="email"
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="address"
                                label="Dirección"
                                id="address"
                                autoComplete="new-address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type="date"
                                InputLabelProps={{shrink: true}}
                                defaultValue="0000-00-00"
                                name="birthdate"
                                label="Fecha nacimiento"
                                id="birthdate"
                                autoComplete="new-birthdate"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Ya tengo una cuenta
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}