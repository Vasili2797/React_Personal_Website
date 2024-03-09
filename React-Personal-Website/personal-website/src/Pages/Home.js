import React from "react";
import { Row, Col } from "react-bootstrap";
import About from "./About";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const Home = () => {
  const componentContent = (
    <>
      <Row className="text-center mt-3">
        <h1>Welcome to The Personal Website of Vasili Nashvilli</h1>
      </Row>

      <Row className="mt-3">
        <Col>
          <About />
        </Col>
      </Row>
    </>
  );

  return standardPanel(componentContent);
};
export default Home;
