import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "./beastData.json";
import Container from "react-bootstrap/Container";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <p>Horned Beasts coming soon...</p>
        {beastData.map((beast, idx) => (
          <HornedBeast key={idx} beast={beast} />
        ))}
      </Container>
    );
  }
}

export default Main;
