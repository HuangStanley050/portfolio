import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import { Container, Jumbotron, Row } from "reactstrap";

const Contact = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="contact-header">
        <Jumbotron>
          <Container>
            <h2>Contact</h2>
          </Container>
        </Jumbotron>
      </div>
      <Container>
        <Row>
          <div>
            <img
              style={{
                borderColor: "gray",
                borderStyle: "solid",
                width: "100px",
                height: "90px",
                borderRadius: "50%",
                margin: "0 auto"
              }}
              src={"../static/jinProfile.jpg"}
            />
            <p style={{ marginTop: "1rem" }}>
              Corned beef shankle tri-tip bresaola. Leberkas salami kielbasa,
              shankle pork loin corned beef shoulder beef ribs hamburger kevin
              burgdoggen. Jerky short ribs corned beef rump spare ribs shoulder
              beef pig tail brisket biltong ball tip tri-tip jowl. Flank kevin
              bresaola, picanha turkey short loin jowl cupim kielbasa sirloin
              ham ribeye. Kielbasa short loin t-bone, beef ribs jerky tenderloin
              buffalo biltong turkey porchetta fatback cupim pork frankfurter.
              Kielbasa ribeye frankfurter ground round pork chop pig pastrami
              sirloin.
            </p>
            <span>
              <i className="fas fa-phone" />
              contact number: 9999999999
            </span>
            <span>
              <i className="fas fa-envelope" />
              email: huang.stanley050@gmail.com
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
