import React from "react";
import { Container } from "react-bootstrap";

function ErrorsLog() {
  return (
    <div className="mt-top">
      <Container>
        <h1>Errors Log</h1>
        <div className="d-flex shadow border p-3 ">
          <div className="p-3 bg-danger m-1 border text-white">Error 1</div>
          <div className="p-3 bg-danger m-1 border text-white">Error 2</div>
          <div className="p-3 bg-danger m-1 border text-white">Error 3</div>
        </div>
      </Container>
    </div>
  );
}

export default ErrorsLog;
