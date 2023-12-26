import React from "react";
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

const Resume = () => {
  const componentContent = (
    <>
      <a
        href="https://drive.google.com/file/d/1SbdxKqy4sT_Xih89vMHgVXDRR87Jm7qp/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Link to Resume
      </a>
      <div>
        <iframe
          src="C:\Users\nashv\Desktop\Programming\Personal_Website\React-Personal-Website\personal-website\src\Files\Updated Resume.pdf"
          width={"90%"}
          height={"800px"}
        />
      </div>
    </>
  );
  return standardPanel(componentContent);
};

const Resumes = () => {
  return (
    <>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </>
  );
};
export default Resumes;
