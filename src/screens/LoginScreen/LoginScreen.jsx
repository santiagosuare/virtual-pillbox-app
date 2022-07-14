import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Typography,
    Container,
    CircularProgress,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';

const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [ isLoading, setIsLoading ] = React.useState(false);

    if(user) {
        setTimeout( () => navigate('/home'), 0);
        return null;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        const jsonData = JSON.stringify(Object.fromEntries(data));
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData,
            });
            setIsLoading(false);
            const result = await response.json();
            const { token } = result;
            login(token);
            navigate('/home');
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
                        Iniciar sesión
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="identification"
                            label="DNI o Correo electrónico"
                            name="identification"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {
                                isLoading
                                ? <CircularProgress color="inherit" size={20}/>
                                : 'Iniciar sesión'
                            }
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link onClick={() => navigate('/register')} variant="body2">
                                    No tengo cuenta
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}