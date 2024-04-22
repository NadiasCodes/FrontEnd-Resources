import React from "react";
import "./Resources.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
// import Colors from "../assets/Card-Images/colors.jpg";

const Resources = () => {
  return (
    <section className="resources-section">
      <div className="container-box">
        <h2 className="header">Resources</h2>
        <Container className="card-box">
          <Row className="p-5">
            <Col xs={12} md={4} xl={4}>
              <Card style={{ width: "20rem" }} className="cards img-fluid">
                <Card.Img variant="top" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/019/original/hhhhng.png?1713797282" />
                <Card.Body>
                  <Card.Title className="card-title">Colors</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="category">
                    <a href="https://coolors.co/efc69b-af1b3f-473144-ccb69b-df9b6d" target="blank">
                      Coolors
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://icolorpalette.com/imagepalette" target="blank">
                      Icolorpalette
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://colorhunt.co/" target="blank">
                      Colorhunt
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://www.palcon.nl/colors/Color-picker.php?colorhex=778899" target="blank">
                      HTML Color Picker
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://webgradients.com/" target="blank">
                      WebGradients
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={4} xl={4}>
              <Card style={{ width: "20rem" }} className="cards img-fluid">
                <Card.Img variant="top" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/014/original/Beige_minimalist_photo_collage.png?1713795671" />
                <Card.Body>
                  <Card.Title className="card-title">Images</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="category">
                    <a href="https://www.freepik.com/" target="blank">
                      Freepik
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://unsplash.com/" target="blank">
                      Unsplash
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    {" "}
                    <a href="https://www.pexels.com/" target="blank">
                      Pexels
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://pixabay.com/" target="blank">
                      Pixabay
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://pikwizard.com/" target="blank">
                      Pikwizard
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={4} xl={4}>
              <Card style={{ width: "20rem" }} className="cards img-fluid">
                <Card.Img variant="top" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/016/original/image.png?1713796819" />
                <Card.Body>
                  <Card.Title className="card-title">Image tools</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="category">
                    <a href="https://www.canva.com/" target="blank">
                      Canva
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://www.remove.bg/" target="blank">
                      removebg
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://pixelied.com/convert/jpg-converter/jpg-to-webp" target="blank">
                      Pixelied
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://www.iloveimg.com/" target="blank">
                      I🤍IMG
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://www.fotor.com/" target="blank">
                      Fotor
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="p-5">
            <Col xs={12} md={4} xl={4}>
              <Card style={{ width: "20rem" }} className="cards img-fluid">
                <Card.Img variant="top" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/020/original/icons.jpg?1713797356" />
                <Card.Body>
                  <Card.Title className="card-title">Icons</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="category">
                    <a href="https://icons8.com/icons/set/svg" target="blank">
                      Icons8
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://www.iconarchive.com/" target="blank">
                      Icon archive
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    {" "}
                    <a href="https://www.svgrepo.com/" target="blank">
                      SVG Repo
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://icon-icons.com/" target="blank">
                      Icon-Icons
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={4} xl={4}>
              <Card style={{ width: "20rem" }} className="cards img-fluid">
                <Card.Img variant="top" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/021/original/4457.jpg?1713797913" />
                <Card.Body>
                  <Card.Title className="card-title">Illustrations</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="category">
                    <a href="https://undraw.co/illustrations" target="blank">
                      unDraw
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://www.getillustrations.com/" target="blank">
                      Getillustrations
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    {" "}
                    <a href="https://storyset.com/people" target="blank">
                      Storyset
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    {" "}
                    <a href="  https://www.drawkit.com/" target="blank">
                      DrawKit
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={4} xl={4}>
              <Card style={{ width: "20rem" }} className="cards img-fluid">
                <Card.Img variant="top" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/124/023/original/Weather_application.png?1713798492" />
                <Card.Body>
                  <Card.Title className="card-title">Nice To Have</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="category">
                    <a href="https://uiverse.io/" target="blank">
                      UIVerse
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    <a href="https://getcssscan.com/css-box-shadow-examples" target="blank">
                      CSS Scan
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    {" "}
                    <a href="https://animista.net/play/basic/shadow-drop-2" target="blank">
                      Animista
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item className="category">
                    {" "}
                    <a href="https://freefrontend.com/" target="blank">
                      freefrontend
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Resources;
