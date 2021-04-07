import "./App.css";
import Navbar from "./features/navbar/Navbar";
import { Route, Switch } from "react-router";
import Summary from "./features/header/Summary";
import SkillsPage from "./features/skills/SkillsPage";
import PageNotFound from "./features/errors/PageNotFound";
import ProjectsPage from "./features/projects/ProjectsPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Summary} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
