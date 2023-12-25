import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const LinkedIn = () => {
  return (
    <>
      <h1>Hello from the LinkedIn Page</h1>
    </>
  );
};
export default LinkedIn;
