import React from "react";
import Alert from "react-bootstrap/Alert";
import ListGroupMedicament from "./ListGroupMedicament";

const Home = () => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let day = time.getDay();
  let month = time.getMonth();
  let year = time.getFullYear();
  let date = time.getDate();
  let dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let dayName = dayNames[day];
  let monthName = monthNames[month];
  let hour = hours;
  let min = minutes;
  let sec = seconds;
  if (hours < 10) {
    hour = "0" + hours;
  }
  if (minutes < 10) {
    min = "0" + minutes;
  }
  if (seconds < 10) {
    sec = "0" + seconds;
  }
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>
          <center>
            <b>RUTINA DEL DIA</b>
          </center>
        </Alert.Heading>
        <center>
          <p>
            {dayName}, {date} de {monthName} de {year}
          </p>
        </center>
      </Alert>

      <ListGroupMedicament />
    </div>
  );
};

export default Home;
