import { Image } from "react-bootstrap";

const PersonalWebsiteLink = () => {
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
                src="https://images.pexels.com/photos/7356/startup-photos-7356.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ height: "300px", width: "450px", display: "block" }}
                fluid
                alt="React Personal Webstite image"
                // style=" min-width: 30px; max-width: 450; height: 300px;"
              />
              <figcaption>Personal Website GitHub Link</figcaption>

              <div className="image__overlay">
                <div className="image__title">GitHub Link</div>
                <p className="image__description">
                  The source code for the current link built using React
                  JavaScript Library and Bootstrap Framework
                </p>
              </div>
            </div>
          </a>
        </ul>
      </figure>
    </div>
  );
};

export default PersonalWebsiteLink;
