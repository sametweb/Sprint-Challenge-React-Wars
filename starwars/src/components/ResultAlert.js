import React from "react";
import { Row, Col, Alert } from "reactstrap";

const ResultAlert = ({ count }) => {
  return (
    <Row>
      <Col xs="12">
        <Alert color="info">{count} characters are found.</Alert>
      </Col>
    </Row>
  );
};

export default ResultAlert;
