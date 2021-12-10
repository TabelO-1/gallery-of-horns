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
            <option value="0">ALL THE HORNS!</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            <option value="4">More Horns Than I Can Count!</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}

export default FilterForm;
{/* <Form>
          <Form.Select aria-label="Default select example">
            <option>Select how much you love dogs, if this is below 7, you die.</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Address" />
            <Form.Text className="text-muted">
              You don't need to know why we need to know your address.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Why you love dogs so much(or why you don't...)
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}