import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultAlert from "./components/ResultAlert";
import Pagination from "./components/Pagination";
import LoadingSpinner from "./components/LoadingSpinner";
import Person from "./components/Person";
import { Container, Row } from "reactstrap";

const App = () => {
  const [people, setPeople] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPage = people.count && Math.ceil(people.count / 10);
  const query = `https://swapi.co/api/people/?page=${page}&search=${searchTerm}`;

  const requestAPI = () => {
    axios
      .get(query)
      .then(response => {
        setPeople(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(requestAPI, [searchTerm, page]);

  return (
    //prettier-ignore
    <div className="App">
      <Header />
      <Container>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setPage={setPage} setLoading={setLoading} />
        <Pagination totalPage={totalPage} page={page} setPage={setPage} setLoading={setLoading} />
        {loading ? ( <LoadingSpinner /> ) : (
          <div>
            <ResultAlert count={people.count} />
            <Row>{people.results && people.results.map((item, index) => ( <Person key={index} data={item} /> ))}</Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
