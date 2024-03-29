import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.cover} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
