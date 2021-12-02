import React from "react";
// import beastData from "props";

class HornedBeast extends React.Component {
  render() {
    return (
      <div className="beast">
        <h2>{this.props.beast.title}</h2>
        <img
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          title={this.props.beast.title}
          style={{ width: "20%" }}
        />
        <p>{this.props.beast.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
