import HTMLImage from "../Files/image/HTML.png";
import CSSIMAGE from "../Files/image/CSSIMAGE.webp";
import JavaScriptImage from "../Files/image/javascript-logo-transparent-logo-javascript-images-3.png";
import JavaImage from "../Files/image/Java_icon.jpg";
import SQLImage from "../Files/image/SQL_Icon.jpg";
import MySQLImage from "../Files/image/MySQL-Logo.png";
import PythonImage from "../Files/image/Python-logo-notext.svg.png";
import GitImage from "../Files/image/github.png";

import * as techList from "../JSON/techStack.json";

const techStackImages = JSON.stringify(techList);
const links = JSON.parse(techStackImages).TechStackIcons;

function ResponsiveAutoExample() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="grid-items">
          <figure>
            <div className="grid-item">
              <img
                src={HTMLImage}
                alt="HTML image"
                title="HTML"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>HTML5</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={CSSIMAGE}
                alt="CSS image"
                title="CSS"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>CSS</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={JavaScriptImage}
                alt="JavaScript image"
                title="JavaScript"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>JavaScript</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={JavaImage}
                alt="Java image"
                title="Java"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>Java</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={SQLImage}
                alt="SQL image"
                title="SQL"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>SQL</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={MySQLImage}
                alt="MySQL image"
                title="MySQL"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>MySQL</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={PythonImage}
                alt="Python image"
                title="Python"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>Python</figcaption>
            </div>
          </figure>

          <figure>
            <div className="grid-item">
              <img
                src={GitImage}
                alt="Git image"
                title="Git"
                style={{ height: "5vh", display: "block" }}
              />
              <figcaption>Git</figcaption>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default ResponsiveAutoExample;
