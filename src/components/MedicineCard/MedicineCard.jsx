import * as React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Button,
} from '@mui/material';
import {
    Medication,
    Check,
    Edit,
    MedicationLiquid,
    Vaccines
} from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function MedicineCard({medicine, laboratorio, rutina}) {
    const navigate = useNavigate();
    console.log( medicine );
    const {
        id_medicamento: id,
        nombre,
        comentario,
        dosis,
        imagen,
        monodroga,
        presentacion,
        unidad_medida: unidadMedida,
    } = medicine;
    return (
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor: '#EEE', marginBottom: '1rem'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {
                        (() => {
                            if( ['inyectable'].includes(presentacion) ) {
                                return <Vaccines />;
                            }
                            if( ['jarabe', 'gota'].includes(presentacion) ) {
                                return <MedicationLiquid />;
                            }
                            return <Medication />;
                        })()
                    }
                </Avatar>
                }
                title={nombre}
                subheader={`${monodroga} ${dosis}${unidadMedida}`}
            />
            {
                imagen &&
                <CardMedia
                    component="img"
                    height="100"
                    image={imagen}
                    alt={nombre}
                />
            }
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {comentario}
                    {laboratorio}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    aria-label="marcar como consumido"
                    variant="contained"
                    color="success"
                    style={{marginRight: '1rem'}}
                >
                    <Check /> Ya la tomé 
                </Button>
                <Button
                    aria-label="editar"
                    variant="outlined"
                    onClick={() => navigate(`/medicina/${id}`)}
                >
                    <Edit /> Editar 
                </Button>
            </CardActions>
        </Card>
    );
}