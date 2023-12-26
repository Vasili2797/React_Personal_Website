import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../src/MyProjects.css";
import StudentDataBase from "../Projects/StudentDataBase";
import OriginalWebSite from "../Projects/OriginalWebsite";
import MachineLearning from "../Projects/MachineLearning";
import CryptoCurrencyPortfolio from "../Projects/CryptoCurrencyPortfolio";
import PersonalWebsiteLink from "../Projects/PersonalWebsiteLink";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const MyProjects = () => {
  const componentContent = (
    <>
      <Row className="text-center mt-3">
        <h1>The Following Are Few of My Personal Projects Hosted on GitHub</h1>
      </Row>
      {/* <div className="container">
        <div className="small-box dark-box mx-auto text-center">
          Small Box / Dark Box
        </div>
      </div> */}
      <Row className="mx-auto justify-content-center">
        <Col
          className="mx-auto text-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <PersonalWebsiteLink />
          <MachineLearning />
        </Col>
      </Row>
      <Row className="mx-auto justify-content-center">
        <Col
          className="mx-auto text-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <StudentDataBase />
          <OriginalWebSite />
        </Col>
      </Row>
    </>
  );
  return standardPanel(componentContent);
};

export default MyProjects;
