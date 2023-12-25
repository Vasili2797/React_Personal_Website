import { Button, Image } from "react-bootstrap";
import moonImage from "../Files/image/moonImageCopy.png";

const OriginalWebSite = () => {
  return (
    <div className="figure-container">
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/Personal_Website/tree/main/newWebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="image">
              <Image
                src={moonImage}
                style={{ height: "300px", width: "450px", display: "block" }}
                fluid
                alt="Personal Website"
              />
              <figcaption style={{ textAlign: "center" }}>
                personal website
              </figcaption>

              <div class="image__overlay">
                <div class="image__title">Personal Website in HTML and CSS</div>
                <p class="image__description">
                  Personal website done only in HTML and CSS
                </p>
              </div>
            </div>
          </a>
          <div>
            <a
              className="right"
              href="https://oldpersonalwebsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                console.log(
                  "When Clicked, it will send the person to live display"
                );
              }}
            >
              Live
            </a>
          </div>
        </ul>
      </figure>
    </div>
  );
};
export default OriginalWebSite;
