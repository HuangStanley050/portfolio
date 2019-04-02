import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
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
                  <CardTitle style={{ textAlign: "center" }}>Test</CardTitle>
                  <span>
                    <i className="fas fa-check-square" />
                    React{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    Redux{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    Express{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    NodeJs{" "}
                  </span>
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
                  <CardTitle style={{ textAlign: "center" }}>Test</CardTitle>
                  <span>
                    <i className="fas fa-check-square" />
                    React{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    Redux{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    Express{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    NodeJs{" "}
                  </span>
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
                  <CardTitle style={{ textAlign: "center" }}>Test</CardTitle>
                  <span>
                    <i className="fas fa-check-square" />
                    React{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    Redux{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    Express{" "}
                  </span>
                  <span>
                    <i className="fas fa-check-square" />
                    NodeJs{" "}
                  </span>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          span {
            margin: 0 1rem;
          }
        `}
      </style>
      <div style={{ marginTop: "2rem" }} className="text-center">
        <Button>View All Projects</Button>
      </div>
    </section>
  );
};

export default Feature;
