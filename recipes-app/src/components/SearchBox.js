import React from "react";
import Form from "react-bootstrap/Forms";

const SearchBox = ({ search }) => {
  return (
    <div>
      <Form>
        <h4>Search:</h4>
        <Form.Group>
          <Form.Control type="text" name="name" onChange={search} />
        </Form.Group>
      </Form>
    </div>
  )
}

export default SearchBox;