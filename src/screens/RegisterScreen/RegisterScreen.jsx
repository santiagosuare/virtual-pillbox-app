import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Register() {
    const navigate = useNavigate();
    const [obrasSociales, setObrasSociales] = React.useState([]);
    const [obraSocial, setObraSocial] = React.useState({label: "", id:""});
    const [ isLoading, setIsLoading ] = React.useState(false);

    useEffect(() => {
        fetch(
            `http://localhost:8010/api/os/0`,
        )
        .then(response => response.json())
        .then(obrasSociales => {
            setIsLoading(false);
            setObrasSociales(obrasSociales.map(obraSocial => ({label: obraSocial.nombre, id: obraSocial.id})));
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const identityData = {...data};
        delete identityData.obraSocial;
        const insuranceData = {
            nombre: obraSocial.label,
            nroAfiliado: 83491190,
            plan: "Plan 1",
            dniUsuario: identityData.DNI, 
        };
        try {
            await fetch('http://localhost:8080/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(identityData),
            });
            await fetch('http://localhost:8010/api/os', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(insuranceData),
            });
            setIsLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error.message, 'error');
        }
    };
    console.log({
        obraSocial,
        obrasSociales,
    });
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
                        <Grid item xs={12}>
                        {
                            obrasSociales.length > 0 &&
                            <Autocomplete
                                disablePortal
                                id="os-combo-box"
                                fullWidth
                                options={obrasSociales}
                                onChange={(event, value) => {
                                    const os = obrasSociales.find(os => os.label === value.label);
                                    setObraSocial({label: os.label, id: os.id});
                                }}
                                value={obraSocial}
                                inputValue={obraSocial.label}
                                onInputChange={(event, value) => setObraSocial({label: value.label, id: value.id})}
                                isOptionEqualToValue={(option, value) => option.id === value.id }
                                renderInput={(params) => {
                                    return (
                                    <TextField
                                        {...params}
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="obraSocial"
                                        label="Obra Social"
                                        type="text"
                                        id="obraSocial"
                                    />);
                                }}
                            />
                        }
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