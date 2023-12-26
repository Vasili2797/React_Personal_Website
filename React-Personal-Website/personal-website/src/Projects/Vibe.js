import { Image } from "react-bootstrap";

const Vibe = () => {
  return (
    <div className="figure-container">
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/React_Personal_Website/tree/main/React-Personal-Website/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <Image
                src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600"
                style={{ height: "300px", width: "450px", display: "block" }}
                fluid
                alt="React Personal Webstite image"
                // style=" min-width: 30px; max-width: 450; height: 300px;"
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
          </a>
          {/* <div>
            <a
              className="right"
              onClick={() => {
                console.log(
                  "When Clicked, it will send the person to live display"
                );
              }}
            >
              Live
            </a>
          </div> */}
        </ul>
      </figure>
    </div>
  );
};

export default Vibe;
