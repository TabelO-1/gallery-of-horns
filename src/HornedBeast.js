import React from "react";
import Card from "react-bootstrap/Card";
// import beastData from "props";
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }
  addFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };
  render() {
    return (
      <Card
        className="styling"
        id="beast"
        style={{ width: "18rem" }}
        onClick={this.addFavorites}
      >
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Img
            variant="top"
            src={this.props.beast.image_url}
            alt={this.props.beast.description}
            title={this.props.beast.title}
            className="beastImg"
          />
          <Card.Text className="beastDescription">
            {this.props.beast.description}.{" "}
            {this.props.beast.horns == 1
              ? `It has ${this.props.beast.horns} horn.`
              : `It has ${this.props.beast.horns} horns.`}
          </Card.Text>
          <Card.Text>∞ = {this.state.favorites}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
