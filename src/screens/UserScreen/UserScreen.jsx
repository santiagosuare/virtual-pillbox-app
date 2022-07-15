import React, {useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { Card } from "react-bootstrap";
import { useAuth } from "../../components/AuthContext";

const User = () => {
  const { user } = useAuth();
  const [obraSocial, setObraSocial] = React.useState([]);
  const {
    Nombre: nombre,
    Apellido: apellido,
    DNI,
    Usuario: email,
    Direccion: direccion,
    Fecha_Nacimiento: fechaNacimiento } = user.subject;

    useEffect(() => {
      fetch(
          `http://localhost:8010/api/os/${DNI}`,
      )
      .then(response => response.json())
      .then(obraSocial => setObraSocial(obraSocial[0]));
      }
    , []);
  
  const fecha = new Date(fechaNacimiento);
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>
          <center>
            <b>DATOS DEL USUARIO</b>
          </center>
        </Alert.Heading>
        <center>
          <p></p>
        </center>
      </Alert>

      <Card>
        <Card.Header as="h5">Datos del Paciente</Card.Header>
        <Card.Body>
          <Card.Title>Informacion Personal</Card.Title>
          <Card.Text>
            <p>
              <b>Nombre y Apellido:</b> {nombre} {apellido} <br />
              <b>Fecha de Nacimiento:</b> {fecha.toLocaleDateString('es-AR')} <br />
              <b>DNI: </b> {DNI} <br />
              <b>Correo Electronico: </b> {email} <br />
              <b>Dirección: </b> {direccion}
            </p>
          </Card.Text>
          <Card.Title>Informacion Prepaga</Card.Title>
          <Card.Text>
            <p>
              <b>Obra Social:</b> {obraSocial?.nombre}
              <br />
              <b>Nro de Afiliado: </b> {obraSocial?.nroAfiliado}
              <br />
              <b>Plan: </b> {obraSocial?.plan}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Medicamentos Solicitados</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              <b>Nombre:</b> Rosuvast
              <br />
              <b>Droga:</b> Rosuvastatina
              <br />
              <b>Laboratorio: </b> Bago
              <br />
              <b>Presentacion: </b> 5 mg: por 8 comprimidos recubiertos.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            <p>
              <b>Nombre:</b> Rosuvast
              <br />
              <b>Droga:</b> Rosuvastatina
              <br />
              <b>Laboratorio: </b> Bago
              <br />
              <b>Presentacion: </b> 5 mg: por 8 comprimidos recubiertos.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            <p>
              <b>Nombre:</b> Rosuvast
              <br />
              <b>Droga:</b> Rosuvastatina
              <br />
              <b>Laboratorio: </b> Bago
              <br />
              <b>Presentacion: </b> 5 mg: por 8 comprimidos recubiertos.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            <p>
              <b>Nombre:</b> Rosuvast
              <br />
              <b>Droga:</b> Rosuvastatina
              <br />
              <b>Laboratorio: </b> Bago
              <br />
              <b>Presentacion: </b> 5 mg: por 8 comprimidos recubiertos.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
