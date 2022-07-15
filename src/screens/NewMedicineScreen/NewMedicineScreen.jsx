import * as React from "react";
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
    Autocomplete,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import { useEffect } from "react";

const theme = createTheme();

export default function EditMedicine() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [medicine, setMedicine] = React.useState({});
    const [laboratorios, setLaboratorios] = React.useState([]);
    const [laboratorio, setLaboratorio] = React.useState({label: "", id:""});
    useEffect(() => {
        fetch(
            `http://localhost:8090/api/laboratorios`,
            { headers: { Authorization: `token` } }
        )
        .then(response => response.json())
        .then(laboratorios => {
            setIsLoading(false);
            setLaboratorios(laboratorios);
            const laboratorio = laboratorios.find(lab => lab.id === medicine.id_laboratorio);
            setLaboratorio({label: laboratorio.nombre, id: laboratorio.id});
        });
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        try {
            setIsLoading(false);
            fetch(
                `http://localhost:5001/medicines`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: user.subject.DNI,
                    },
                    body: JSON.stringify({
                        "nombre": medicine.nombre,
                        "monodroga": medicine.monodroga,
                        "dosis": medicine.dosis,
                        "unidad_medida": medicine.unidad_medida,
                        "imagen": "",
                        "presentacion": medicine.presentacion,
                        "comentario": medicine.comentario,
                        "id_laboratorio": laboratorio.id,
                    }),
                }
            )
            .then(response => response.json())
            .then(() => navigate(`/home`));
        } catch (error) {
            console.log(error.message, "error");
        }
    };

    if(isLoading) {
        return <CircularProgress />;
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Editar medicamento<br />
                        {medicine.nombre}
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Nombre"
                                label="Nombre"
                                name="Nombre"
                                autoComplete="name"
                                value={medicine.nombre ?? ""}
                                onChange={(event) => setMedicine({...medicine, nombre: event.target.value})}
                                autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Monodrogra"
                                label="Monodrogra"
                                name="Monodrogra"
                                autoComplete="Monodrogra-name"
                                value={medicine.monodroga ?? ""}
                                onChange={(event) => setMedicine({...medicine, monodroga: event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Dosis"
                                label="Dosis"
                                name="Dosis"
                                autoComplete="Dosis-name"
                                value={medicine.dosis ?? ""}
                                onChange={(event) => setMedicine({...medicine, dosis: event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    id="unidad-medida-combo-box"
                                    options={['ml', 'g', 'mg', 'u']}
                                    fullWidth
                                    value={medicine.unidad_medida ?? ""}
                                    onChange={(event, value) => setMedicine({...medicine, unidad_medida: value})}
                                    inputValue={medicine.unidad_medida ?? ""}
                                    onInputChange={(value) => setMedicine({...medicine, unidad_medida: value})}
                                    renderInput={(params) => {
                                        return (
                                        <TextField
                                            {...params}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="unidad_media"
                                            label="Unidad Media"
                                            name="Unidad Media"
                                            type="text"
                                            autoComplete="Unidad Media-name"
                                        />);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <Autocomplete
                                    disablePortal
                                    id="presentacion-combo-box"
                                    options={['Comprimido', 'Capsula', 'Jarabe', 'Inyectable', 'Gota']}
                                    fullWidth
                                    value={medicine.presentacion ?? ""}
                                    onChange={(event,value) => setMedicine({...medicine, presentacion: value})}
                                    inputValue={medicine.presentacion ?? ""}
                                    onInputChange={(value) => setMedicine({...medicine, presentacion: value})}
                                    renderInput={(params) => {
                                        return (
                                        <TextField
                                            {...params}
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="presentacion"
                                            label="Presentacion"
                                            id="Presentacion"
                                            autoComplete="Presentacion"
                                        />);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Comentario"
                                label="Comentario"
                                type="Comentario"
                                autoComplete="Comentario"
                                value={medicine.comentario ?? ""}
                                onChange={(event) => setMedicine({...medicine, comentario: event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    laboratorios.length > 0 &&
                                    <Autocomplete
                                        disablePortal
                                        id="lab-combo-box"
                                        fullWidth
                                        options={laboratorios.map(lab => ({label:lab.nombre, id:lab.id}))}
                                        onChange={(event, value) => {
                                            const lab = laboratorios.find(lab => lab.nombre === value.label);
                                            setMedicine({ ...medicine, id_laboratorio: lab.id });
                                            setLaboratorio({label: lab.nombre, id: lab.id});
                                        }}
                                        value={laboratorio}
                                        inputValue={laboratorio.label}
                                        onInputChange={(value) => setMedicine({...medicine, id_laboratorio: value.id}) && setLaboratorio({label: value, id: value.id})}
                                        isOptionEqualToValue={(option, value) => option.id === value.id }
                                        renderInput={(params) => {
                                            return (
                                            <TextField
                                                {...params}
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="Laboratorio"
                                                label="Laboratorio"
                                                type="text"
                                                id="Laboratorio"
                                            />);
                                        }}
                                    />
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                <Button variant="contained" fullWidth component="span">
                                    Cargar imagen
                                </Button>
                                </label> 
                            </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        {isLoading ? (
                            <CircularProgress color="inherit" size={20} />
                        ) : (
                            "Guardar"
                        )}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={() => navigate(-1)} variant="body2">
                                    Volver
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
