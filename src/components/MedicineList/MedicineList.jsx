import React, { useEffect } from "react";
import { ListGroup, Container } from "react-bootstrap";
import MedicineCard from "../MedicineCard";
import { Add } from "@mui/icons-material";
import { CircularProgress, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const MedicineList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = React.useState(true);
  const [ medicines, setMedicines ] = React.useState([]);

  const fetchMedicines = async () => {
    fetch(
      'http://localhost:5001/medicines',
      {
        method: 'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': user.subject.DNI,
        },
      }
    ).then(
      async response =>
      {
        const result = await response.json();
        setMedicines(result);
      }
    ).catch(
      error => console.log(error.message, 'error')
    ).finally( () => setIsLoading(false)
  );
};

  useEffect(() => { fetchMedicines() }, []);

  return (
      <ListGroup>
        <Container>
          {
            isLoading
            ? <CircularProgress />
            : medicines.map( (medicine, index) => <MedicineCard medicine={medicine} key={index}/> )
          }
          <Button
              aria-label="nuevo"
              variant="contained"
              color="success"
              fullWidth
              onClick={() => navigate(`/medicina/new`)}
          >
              <Add /> Agregar nuevo Medicamento 
          </Button>
        </Container>
      </ListGroup>
  );
};

export default MedicineList;
