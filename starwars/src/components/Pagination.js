import React from "react";
import { Row, Col, ButtonGroup, Button } from "reactstrap";

const Pagination = ({ page, totalPage, setPage }) => {
  return totalPage === 1 ? null : (
    <Row>
      <Col xs="12" className="mb-3">
        <ButtonGroup>
          <Button
            color="primary"
            disabled={!page || page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            &larr; Previous Page
          </Button>
          {Array(totalPage)
            .fill(0)
            .map((item, index) => (
              <Button
                key={index}
                color="primary"
                outline={index + 1 === page ? false : true}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          <Button
            color="primary"
            disabled={!page || page >= totalPage ? true : false}
            onClick={() => setPage(page + 1)}
          >
            Next Page &rarr;
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default Pagination;
