import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = () => {
  return (
    <div className="header">
      <Jumbotron>
        <Container>
          <div
            className="header-img-info"
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <img
              style={{ Width: "220px", height: "200px", objectFit: "cover" }}
              src={"../static/jinProfile.jpg"}
            />
            <div
              style={{
                marginLeft: "2rem"
              }}
              className="header-intro"
            >
              <h3>Hello, my name is</h3>
              <h2>Stanley</h2>
              <p>
                Corned beef shankle tri-tip bresaola. Leberkas salami kielbasa,
                shankle pork loin corned beef shoulder beef ribs hamburger kevin
                burgdoggen. Jerky short ribs corned beef rump spare ribs
                shoulder beef pig tail brisket biltong ball tip tri-tip jowl.
                Flank kevin bresaola, picanha turkey short loin jowl cupim
                kielbasa sirloin ham ribeye. Kielbasa short loin t-bone, beef
                beef ribs jerky tenderloin buffalo biltong turkey porchetta
                fatback cupim pork frankfurter. Kielbasa ribeye frankfurter
                ground round pork chop pig pastrami sirloin.
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
