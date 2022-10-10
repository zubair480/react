import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ErrorsLog from "./ErrorsLog";
import UploadFile from "./UploadFile";

function ParsedFile() {
  return (
    <div>
      <Container>
        <UploadFile />
        <h1>Parsed File</h1>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Raw Data">
            <p>This is a raw data file</p>
          </Tab>
          <Tab eventKey="profile" title="Parsed Data">
            <Table striped className="border">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Carrier</th>
                  <th>UDL's</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> "Header": "CPM"</td>
                  <td> "AirlineDesignator": "EY"</td>
                  <td> "ULDBayDesignation": "AL",</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td>"FlightNumber": "972",</td>

                  <td> "ULDTypeCode": "PMC77612EY",</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td> "DepartureDate": "11",</td>
                  <td> "UnloadingStation": "AUH",</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> </td>
                  <td> </td>
                  <td> "Weight": "1915",</td>
                </tr>
              </tbody>
            </Table>
            <Container>
              <ErrorsLog />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ParsedFile;
