import React from "react";
import HornedBeast from "./HornedBeast";
import FilterForm from "./FilterForm";
import beastData from "./beastData.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <FilterForm />
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {beastData.map((beast, idx) => (
            <HornedBeast key={idx} beast={beast} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
