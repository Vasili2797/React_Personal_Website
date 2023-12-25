import { Image } from "react-bootstrap";

const StudentDataBase = () => {
  return (
    <div className="figure-container">
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/Java_Lessons/tree/main/src/main/com/Projects/StudentDatabaseApplication/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <Image
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ height: "300px", width: "450px", display: "block" }}
                fluid
                alt="student course registration image"
              />
              <figcaption>student course registration</figcaption>
              <div className="image__overlay">
                <div className="image__title">Student Registration</div>
                <p className="image__description">
                  Java program where an individual can enroll as a student and
                  start registering for different courses
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
export default StudentDataBase;
