import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../src/MyProjects.css";
import StudentDataBase from "../Projects/StudentDataBase";
import OriginalWebSite from "../Projects/OriginalWebsite";
import MachineLearning from "../Projects/MachineLearning";
import CryptoCurrencyPortfolio from "../Projects/CryptoCurrencyPortfolio";
import PersonalWebsiteLink from "../Projects/PersonalWebsiteLink";
import Vibe from "../Projects/Vibe";
import ShoppingList from "../Projects/ShoppingList";

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
          <Vibe />
        </Col>
      </Row>
      <Row className="mx-auto justify-content-center">
        <Col
          className="mx-auto text-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CryptoCurrencyPortfolio />
          <OriginalWebSite />
        </Col>
      </Row>
      <Row className="mx-auto justify-content-center">
        <Col
          className="mx-auto text-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ShoppingList />
        </Col>
      </Row>
    </>
  );
  return standardPanel(componentContent);
};

export default MyProjects;
