import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import IndexImage from "../Files/image/index_picture.jpg";
import Image from "react-bootstrap/Image";
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
      <div>
        <div className="container m-2">
          <div className="item">
            <img
              src={IndexImage}
              alt="Index Image"
              className="mx-auto d-block"
              id="indexPageImage"
            />
          </div>
        </div>
      </div>
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
