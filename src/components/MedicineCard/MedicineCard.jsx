import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import Check from '@mui/icons-material/Check';
import Edit from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Medication } from '@mui/icons-material';

const ExpandMore = styled(
    (props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

export default function MedicineCard() {
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