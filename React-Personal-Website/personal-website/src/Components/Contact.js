import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import confirmation from "./ConfirmationLink";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const Contact = () => {
  const componentContent = (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={6} md={8}>
          <h2>Contact</h2>
          <p>
            Developer interested in helping companies make their dreams come
            true and achieve their full potential. For all the services, please
            include your name, email address, and reason for contact and I will
            get back as soon as possible!
          </p>
          <br />
          <form
            // target="_blank"
            action="https://formsubmit.co/910d81f5f6a12396e7cc7c1ab5e5373f"
            method="POST"
            id="contact-form"
          >
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="https://reactpersonalwebsitetesting.netlify.app/ConfirmationLink"
            ></input>
            <label for="name" id="name">
              name
            </label>

            <input
              name="name"
              defaultValue=""
              type="name"
              id="name"
              placeholder="name"
              required
            />

            <div>
              <label for="email" id="email">
                email address
              </label>
              <input
                name="email"
                defaultValue=""
                type="email"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                placeholder="email@..."
                title="Not Valid"
                required
              />
            </div>

            <br />
            <label for="Services" id="Services">
              services required
            </label>
            <br />
            <textarea
              name="Service"
              cols="50"
              rows="10"
              placeholder="Services "
              required
            ></textarea>
            <br />
            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
  return standardPanel(componentContent);
};
export default Contact;
