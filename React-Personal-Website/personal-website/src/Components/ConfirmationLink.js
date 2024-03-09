import { Cursor } from "mongoose";
import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const ConfirmationLink = () => {
  const componentContent = (
    <>
      <Row className="text-center mt-3">
        <h1>Thank you for your submission!</h1>
        <h5>
          I will reach out to the provided email as soon as possible. To return
          to my website, please{" "}
          <a href="/" style={{ textDecoration: "underline", color: "black" }}>
            press here
          </a>
          .
        </h5>
      </Row>
    </>
  );

  return standardPanel(componentContent);
};
export default ConfirmationLink;
