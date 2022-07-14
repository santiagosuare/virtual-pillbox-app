import React from "react";
import Alert from "react-bootstrap/Alert";
import { Card } from "react-bootstrap";
import { useAuth } from "../../components/AuthContext";

const User = () => {
  const { user } = useAuth();
  console.log( user );
  console.log( user.subject );
  const {
    Nombre: nombre,
    Apellido: apellido,
    DNI,
    Usuario: email,
    Direccion: direccion,
    Fecha_Nacimiento: fechaNacimiento } = user.subject;
  
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
              <b>Obra Social:</b> PAMI
              <br />
              <b>Nro de Afiliado: </b> 123456789
              <br />
              <b>Plan: </b> AB345/10
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
