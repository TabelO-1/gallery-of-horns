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
      <div className="beast">
        <Card onClick={this.addFavorites}>
          <Card.Body>
            <Card.Title>{this.props.beast.title}</Card.Title>
            <Card.Img
              variant="top"
              src={this.props.beast.image_url}
              alt={this.props.beast.description}
              title={this.props.beast.title}
              style={{ width: "20%" }}
            />
            <Card.Text>{this.props.beast.description}</Card.Text>
            <Card.Text>🔥 = {this.state.favorites}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeast;
