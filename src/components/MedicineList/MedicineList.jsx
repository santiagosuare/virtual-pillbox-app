import React, { useEffect } from "react";
import { ListGroup, Container } from "react-bootstrap";
import MedicineCard from "../MedicineCard";
import { CircularProgress } from "@mui/material";

const MedicineList = () => {
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
          'Authorization': 1,
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
        </Container>
      </ListGroup>
  );
};

export default MedicineList;
