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
            file1.pcm
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            file2.pcm
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            file3.pcm
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            fil41.pcm
          </ListGroup.Item>
          <ListGroup.Item action variant="danger" className="my-2">
            fil51.pcm
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default History;
