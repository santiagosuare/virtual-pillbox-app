import * as React from 'react';
import {
    CircularProgress,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    
    Typography,
    Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function EditMedicine({ medicine }) {
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        const jsonData = JSON.stringify(Object.fromEntries(data));
        try {
            const response = await fetch('http://localhost:8080/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData,
            });
            setIsLoading(false);
            await response.json();
            navigate('/login');
        } catch (error) {
            console.log(error.message, 'error');
        }
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
                    Editar medicamento
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="id"
                            name="DNI"
                            required
                            fullWidth
                            id="DNI"
                            label="DNI"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="Nombre"
                            required
                            fullWidth
                            id="Nombre"
                            label="Nombre"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="Apellido"
                            label="Apellido"
                            name="Apellido"
                            autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="Usuario"
                            label="Correo electrónico"
                            name="Usuario"
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="Password"
                            label="Contraseña"
                            type="Password"
                            id="Password"
                            autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="Direccion"
                                label="Dirección"
                                id="Direccion"
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
                                name="Fecha_Nacimiento"
                                label="Fecha nacimiento"
                                id="Fecha_Nacimiento"
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
                        {
                            isLoading
                            ? <CircularProgress color="inherit" size={20}/>
                            : 'Crear cuenta'
                        }
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link onClick={() => navigate('/login')} variant="body2">
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