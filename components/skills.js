import React from "react";
import { Container, Row, Col } from "reactstrap";

const Skills = () => {
  return (
    <section style={{ marginTop: "2rem" }} className="skills">
      <Container>
        <h3 style={{ textAlign: "center" }}>Skills Overview</h3>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
          Ham hock tail pig fatback sausage. Strip steak picanha ground round
          landjaeger, flank fatback short loin jowl ball tip beef. Jerky t-bone
          short ribs pork chop frankfurter. Cow bacon hamburger, corned beef
          alcatra pork burgdoggen short ribs landjaeger filet mignon leberkas
          ribeye. Shankle kevin ham hock rump, tenderloin prosciutto cupim
          meatloaf corned beef ball tip.
        </div>
        <Row style={{ marginTop: "2rem" }}>
          <Col style={{ display: "flex" }} xs="12" md="4">
            <div className="skills-sub">
              <h4 style={{ textAlign: "center" }}>Front End</h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <i className="fas fa-star" />
                  Javascript ES6
                </li>
                <li>
                  <i className="fas fa-star" />
                  HTML/CSS/Bootstrap
                </li>
                <li>
                  <i className="fas fa-star" />
                  React/Redux/React Router
                </li>
                <li>
                  <i className="fas fa-star" />
                  Redux Thunk/Redux Saga
                </li>
                <li>
                  <i className="fas fa-star" />
                  Firebase
                </li>
                <li>
                  <i className="fas fa-star" />
                  D3
                </li>
              </ul>
            </div>
          </Col>
          <Col style={{ display: "flex" }} xs="12" md="4">
            <div className="skills-sub">
              <h4 style={{ textAlign: "center" }}>Back End</h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <i className="fas fa-star" />
                  NodeJS
                </li>
                <li>
                  <i className="fas fa-star" />
                  MongoDB
                </li>
                <li>
                  <i className="fas fa-star" />
                  ExpressJS
                </li>
              </ul>
            </div>
          </Col>
          <Col style={{ display: "flex" }} xs="12" md="4">
            <div className="skills-sub">
              <h4 style={{ textAlign: "center" }}>Relevant Skills</h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <i className="fas fa-star" />
                  Stakeholder Management
                </li>
                <li>
                  <i className="fas fa-star" />
                  Problem Solving
                </li>
                <li>
                  <i className="fas fa-star" />
                  Making Creative solutions
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .fas.fa-star {
          margin-right: 1rem;
        }
        .skills-sub {
          border-style: solid;
          border-width: 5px;
          padding: 1rem;
          flex: 1;
        }
      `}</style>
    </section>
  );
};

export default Skills;
