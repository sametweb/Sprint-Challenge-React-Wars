import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";
const SearchBar = props => {
  return (
    <Col xs="12">
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          onChange={e => props.setSearchTerm(e.target.value)}
          value={props.searchTerm}
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Search a Person in Star Wars World"
        />
      </FormGroup>
    </Col>
  );
};

export default SearchBar;
