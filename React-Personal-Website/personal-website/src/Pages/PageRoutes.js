import { BrowserRouter, Route, Switch } from "react-router-dom";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import MyProjects from "./MyProjects";
import Resume from "./Resume";
import Home from "./Home";
import Navigation from "../Components/Navigation";
function PageRoutes() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={<Home />}>
            <Home />
          </Route>
          <Route path="About" component={<Home />} />
          <Route path="GitHub" element={<GitHub />} />
          <Route path="LinkedIn" element={<LinkedIn />} />
          <Route path="MyProjects" element={<MyProjects />} />
          <Route path="Resume" element={<Resume />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default PageRoutes;
