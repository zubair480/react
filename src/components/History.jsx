import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function History() {
  return (
    <div>
      <Container>
        <h3>Parsed Files History</h3>
        <ListGroup>
          <ListGroup.Item action variant="danger" className="my-2">
            File One
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            File Two
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            File Three
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            File Four
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            File Five
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default History;
