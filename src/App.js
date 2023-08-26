//import './App.css';

import { Button, Container, Row, Col } from "react-bootstrap";

import  DatesCount  from "./components/DatesCount";
import DatesList from "./components/DatesList";
import { person } from "./data";

function App() {
  

  return (
    <div className="font color-body">
      مطعم الزيوو
      <Container className="py-5">
        
        <DatesCount person={person}  />

        <DatesList person={person} />

        <Row className="justify-content-center my-2 ">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-style p2"> عرض البيانات</Button>
            <Button className="btn-style p2"> مسح البيانات</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
