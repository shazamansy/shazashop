import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        وجبات اليوم <br></br>
        اساسيه و سناكس<br></br>
        لديك {person.length}وجبات اليوم
      </Col>
    </Row>
  )
}

export default DatesCount;
