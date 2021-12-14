import React from "react";
import Form from "react-bootstrap/Form";
import beastData from "./beastData.json";

class FilterForm extends React.Component {
  filter = (event) => {
    const numOfHorns = parseInt(event.target.value);
    let gallery = beastData;
    if (numOfHorns) {
      gallery = beastData.filter((beast) => beast.horns === numOfHorns);
    }
  };
  render() {
    return (
      <>
        <Form className="styling" id="form">
          <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
          <br />
          <Form.Select
            onChange={this.filter}
            className="formSelect"
            name="numOfHorns"
          >
            <option value="">Complete Gallery</option>
            <option value="1">One-Horned Gallery</option>
            <option value="2">Two-Horned Gallery</option>
            <option value="3">Three-Horned Gallery</option>
            <option value="100">Insane amounts of horns Gallery</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}

export default FilterForm;
