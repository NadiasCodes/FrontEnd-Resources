import React from "react";
import "./Resources.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Resources = () => {
  return (
    <section className="resources-section">
      <div className="container-box">
        <Container>
          <Row>
            <Col xs={6} md={4} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Resources;
