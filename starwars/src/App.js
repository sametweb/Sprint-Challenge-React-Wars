import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultAlert from "./components/ResultAlert";
import Pagination from "./components/Pagination";
import Person from "./components/Person";
import { Container, Row } from "reactstrap";

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

  useEffect(requestAPI, [searchTerm, page]);

  return (
    <div className="App">
      <Header />
      <Container>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setPage={setPage}
        />
        <ResultAlert count={people.count} />
        <Pagination totalPage={totalPage} page={page} setPage={setPage} />
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
