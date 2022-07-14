import * as React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
    Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Medication, Check, Edit } from '@mui/icons-material';

export default function MedicineCard({medicine}) {
    console.log( medicine );
    return (
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor: '#EEE', marginBottom: '1rem'}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <Medication/>
                </Avatar>
                }
                title="IBU400"
                subheader="Ibuprofeno 400mg"
            />
            <CardMedia
                component="img"
                height="194"
                image="/images/pills.jpeg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    1 comprimido en 1 hora (12:00)<br/>
                    Laboratorio Bayer
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
                >
                    <Edit /> Editar 
                </Button>
            </CardActions>
        </Card>
    );
}