import React from "react";
import { Row, Col, Spinner } from "reactstrap";

const LoadingSpinner = () => {
  return (
    <Row>
      <Col xs="12">
        <Spinner
          type="grow"
          color="primary"
          style={{ width: "50px", height: "50px" }}
        />
      </Col>
    </Row>
  );
};

export default LoadingSpinner;
