import React from "react";
import Card from "react-bootstrap/Card";
// import beastData from "props";

class HornedBeast extends React.Component {
  render() {
    return (
      <div className="beast">
        <Card>
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
          </Card.Body>
        </Card>
        {/* <h2>{this.props.beast.title}</h2>
        <img
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          title={this.props.beast.title}
          style={{ width: "20%" }}
        />
        <p>{this.props.beast.description}</p> */}
      </div>
    );
  }
}

export default HornedBeast;
