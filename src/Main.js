import React from "react";
import HornedBeast from "./HornedBeast";
import FilterForm from "./FilterForm";
import beastData from "./beastData.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: beastData,
    };
  }

  updateGallery = (filteredGallery) => {
    this.setState({ gallery: filteredGallery });
  };
  render() {
    return (
      <Container>
        <FilterForm updateGallery={this.updateGallery} />
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {this.state.gallery.map((beast, idx) => (
            <HornedBeast key={idx} beast={beast} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
