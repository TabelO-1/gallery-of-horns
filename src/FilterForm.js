import React from "react";
import Form from "react-bootstrap/Form";

class FilterForm extends React.Component {
  render() {
    return (
      <>
        <Form className="form">
          <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
          <br/>
          <Form.Select className="formSelect" name="numOfHorns">
            <option value="0">Complete Gallery</option>
            <option value="1">One-Horned Gallery</option>
            <option value="2">Two-Horned Gallery</option>
            <option value="3">Three-Horned Gallery</option>
            <option value="10">Insane amounts of horns Gallery</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}

export default FilterForm;