import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
const SearchBar = ({ searchTerm, setSearchTerm, setPage }) => {
  return (
    <Row>
      <Col xs="12">
        <FormGroup>
          <Input
            onChange={e => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            value={searchTerm}
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="Search a Person in Star Wars World"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
