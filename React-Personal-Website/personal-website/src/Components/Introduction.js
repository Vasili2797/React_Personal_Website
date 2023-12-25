import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import GitHub from "../Pages/GitHub";
import LinkedIn from "../Pages/LinkedIn";
import MyProjects from "../Pages/MyProjects";
import Resume from "../Pages/Resume";
import Navigation from "./Navigation";
import Home from "../Pages/Home";
import Contact from "./Contact";

const Introduction = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="Home" Component={Home} />
        <Route path="About" Component={Home} />
        <Route path="https://github.com/Vasili2797" Component={GitHub} />
        <Route
          path="https://www.linkedin.com/in/vasili-nashvilli-08bb95140/"
          Component={LinkedIn}
        />
        <Route path="MyProjects" Component={MyProjects} />
        <Route path="Resume" Component={Resume} />
        <Route path="Contact" Component={Contact} />
      </Routes>
    </>
  );
};
export default Introduction;
