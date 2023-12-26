import { Image } from "react-bootstrap";

const Vibe = () => {
  return (
    <div className="figure-container">
      <figure>
        <ul>
          <div className="image">
            <Image
              src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
              style={{ height: "300px", width: "450px", display: "block" }}
              fluid
              alt="React Personal Webstite image"
            />
            <figcaption>Vibe Client Program</figcaption>

            <div className="image__overlay">
              <div className="image__title">Vibe</div>
              <p className="image__description">
                Built a client website using React lbrary with Typescript
                Template
              </p>
            </div>
          </div>
        </ul>
      </figure>
    </div>
  );
};

export default Vibe;
