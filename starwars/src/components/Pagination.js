import React from "react";
import { Row, Col, ButtonGroup, Button } from "reactstrap";

const Pagination = ({ page, totalPage, setPage, setLoading }) => {
  return totalPage === 1 ? null : (
    <Row>
      <Col xs="12" className="mb-3">
        <ButtonGroup>
          <Button
            color="primary"
            disabled={!page || page === 1 ? true : false}
            onClick={() => {
              setPage(page - 1);
              setLoading(true);
            }}
          >
            &larr; Previous Page
          </Button>
          {Array(totalPage)
            .fill(0)
            .map((item, index) => (
              <Button
                key={index}
                color={index + 1 === page ? "secondary" : "primary"}
                disabled={index + 1 === page ? true : false}
                onClick={() => {
                  setPage(index + 1);
                  setLoading(true);
                }}
              >
                {index + 1}
              </Button>
            ))}
          <Button
            color="primary"
            disabled={!page || page >= totalPage ? true : false}
            onClick={() => {
              setPage(page + 1);
              setLoading(true);
            }}
          >
            Next Page &rarr;
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default Pagination;
