import React from "react";

const Person = ({ data }) => {
  console.log(data);
  return (
    <div className="Person">
      <h2>{data.name}</h2>
      <p>Gender: {data.gender}</p>
      <p>
        <span>Hair: {data.hair_color}</span>
        <span>Skin: {data.skin_color}</span>
      </p>
      <p>
        <span>Height: {data.height} cm</span>
        <span>Mass: {data.mass} kg</span>
      </p>
    </div>
  );
};

export default Person;
