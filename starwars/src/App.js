import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Person from "./components/Person";

const App = () => {
  const [people, setPeople] = useState({});

  const requestAPI = () => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeople(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(requestAPI, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.results && people.results.map(item => <Person data={item} />)}
    </div>
  );
};

export default App;
