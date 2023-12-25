import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ResponsiveAutoExample from "./TechStackFlexBox";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const aboutMeSection = () => {
  const componentContent = (
    <>
      <h2 className="text-center">About Me</h2>
      <p id="first_paragraph">
        Hello, and thank you for visiting my webpage. My name is Vasili
        Nashvilli, a developer based in New Jersey. I have a bachelor's of
        science degree in{" "}
        <a
          href="https://www.montclair.edu/catalog/view_requirements.php?CurriculumID=2965"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mathematics of Finance
        </a>{" "}
        from{" "}
        <a
          href="https://www.montclair.edu/"
          target="_blank"
          rel="noopener noreferrer"
          title="https://www.montc..."
        >
          Montclair State University
        </a>
        , where I took courses in classes such as probability, statistics and
        economics uniting the differences between the sciences of mathematics
        and finance. I am interested in different types of technologies and how
        it could improve the lives of many people in different fields of work. I
        am a self-taught developer with knowledge in the following tech stack:
      </p>
      <ResponsiveAutoExample />
    </>
  );
  return standardPanel(componentContent);
};

export default aboutMeSection;
