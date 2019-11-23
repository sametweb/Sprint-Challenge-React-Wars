import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Person from "./components/Person";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { Container, Row, Col, Alert } from "reactstrap";

const App = () => {
  const [people, setPeople] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const query = `https://swapi.co/api/people/?page=${page}&search=${searchTerm}`;
  const totalPage = people.count && Math.ceil(people.count / 10);
  const requestAPI = () => {
    axios
      .get(query)
      .then(response => {
        console.log("Component Did Mount");
        setPeople(response.data);
      })
      .catch(error => console.log(error));
  };

  // const searchHandler = term => setSearchTerm(term);

  useEffect(requestAPI, [searchTerm, page]);

  console.log(totalPage);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <Row>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Row>
        <Row>
          <Col xs="12">
            <Alert color="info">{people.count} characters are found.</Alert>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="mb-3">
            <Pagination
              totalPage={totalPage}
              next={people.next}
              prev={people.previous}
              page={page}
              setPage={setPage}
            />
          </Col>
        </Row>
        <Row>
          {people.results &&
            people.results.map((item, index) => (
              <Person key={index} data={item} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
