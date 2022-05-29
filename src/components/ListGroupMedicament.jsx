import React from "react";
import { ListGroup, Image, Container, Row, Col } from "react-bootstrap";
import MOCK from "../mocks/MOCK_DATA.json";

const ListGroupMedicament = () => {
  console.log(MOCK[0]);

  return (
    <div>
      <ListGroup>
        <Container>
          {MOCK.map((medicament) => (
            <ListGroup.Item>
              <Row>
                <Col xs={6} md={4}>
                  <h5>{medicament.name_drug}</h5>
                  <p>Dosis: {medicament.cant} comprimidos</p>
                  <p>
                    <h4>
                      <b>{medicament.time} HS</b>
                    </h4>
                  </p>
                </Col>
                <Col xs={3} md={2}>
                  <Image
                    src={medicament.image}
                    className="img-circle"
                    alt="Cinque Terre"
                    width="100"
                    height="100"
                  />
                </Col>
              </Row>
              {/* <div className="row" key={medicament.id}>
                <div className="col-md-1">
                  <h5>{medicament.name_drug}</h5>
                  <p>{medicament.time}</p>
                </div>
              </div>
              <div className="col-md-12">
                <Image
                  src={medicament.image}
                  className="img-circle"
                  alt="Cinque Terre"
                  width="50"
                  height="50"
                />
              </div> */}
            </ListGroup.Item>
          ))}
        </Container>
      </ListGroup>
    </div>
  );
};

export default ListGroupMedicament;
