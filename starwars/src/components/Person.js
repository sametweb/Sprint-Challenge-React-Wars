import React from "react";
import { Col, Card, CardText, CardBody, CardHeader } from "reactstrap";

const Person = ({ data }) => {
  const { name, gender, hair_color, skin_color, height, mass } = data;
  return (
    <Col xs="12" sm="6" lg="2.4" className="mb-3">
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          <CardText>Gender: {gender}</CardText>
          <CardText>Hair: {hair_color}</CardText>
          <CardText>Skin: {skin_color}</CardText>
          <CardText>Height: {height} cm</CardText>
          <CardText>Mass: {mass} kg</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Person;
