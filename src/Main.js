import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "./beastData.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <p>Horned Beasts coming soon...</p>
        <Row xs={1} md={2} lg={3} xl={4}>
          {beastData.map((beast, idx) => (
            <HornedBeast key={idx} beast={beast} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
