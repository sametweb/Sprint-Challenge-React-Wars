import React from "react";
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle
} from "reactstrap";

const Person = ({ data }) => {
  return (
    <Col xs="12" sm="6" lg="2.4" className="mb-3">
      <Card>
        <CardHeader>{data.name}</CardHeader>
        <CardBody>
          <CardSubtitle>Gender: {data.gender}</CardSubtitle>
          <CardText>Hair: {data.hair_color}</CardText>
          <CardText>Skin: {data.skin_color}</CardText>
          <CardText>Height: {data.height} cm</CardText>
          <CardText>Mass: {data.mass} kg</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Person;
