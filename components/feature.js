import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

const Feature = () => {
  return (
    <section style={{ marginTop: "2rem" }} className="feature-projects">
      <Container>
        <h3 style={{ textAlign: "center" }}>Featured Projects</h3>
        <Row style={{ marginTop: "3rem" }}>
          <Col className="form-group" xs="12" md="4">
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="http://via.placeholder.com/640x360"
                />
                <CardBody>
                  <CardTitle>Test</CardTitle>
                  <CardText>askdfjalkfdalfdkjadfl</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col className="form-group" xs="12" md="4">
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="http://via.placeholder.com/640x360"
                />
                <CardBody>
                  <CardTitle>Test</CardTitle>
                  <CardText>askdfjalkfdalfdkjadfl</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col className="form-group" xs="12" md="4">
            <div>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="http://via.placeholder.com/640x360"
                />
                <CardBody>
                  <CardTitle>Test</CardTitle>
                  <CardText>askdfjalkfdalfdkjadfl</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
