import React from "react";
import { ButtonGroup, Button } from "reactstrap";

const Pagination = props => {
  console.log(props);
  return props.totalPage === 1 ? null : (
    <ButtonGroup>
      <Button
        color="primary"
        disabled={!props.page || props.page === 1 ? true : false}
        onClick={() => props.setPage(props.page - 1)}
      >
        &larr; Previous Page
      </Button>
      {Array(props.totalPage)
        .fill(0)
        .map((item, index) => (
          <Button
            color="primary"
            outline={index + 1 === props.page ? false : true}
            onClick={() => props.setPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      <Button
        color="primary"
        disabled={!props.page || props.page >= props.totalPage ? true : false}
        onClick={() => props.setPage(props.page + 1)}
      >
        Next Page &rarr;
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
