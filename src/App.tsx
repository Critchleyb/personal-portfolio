import "./App.css";
import Navbar from "./features/navbar/Navbar";
import { Route } from "react-router";
import Summary from "./features/header/Summary";
import Test from "./features/test";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Summary} />
      <Route path="/test" component={Test} />
    </>
  );
}

export default App;
