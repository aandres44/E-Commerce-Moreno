import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propiedades from "./pages/propiedades";
import Propiedad from "./pages/Propiedad";

const AppEngine = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/propiedades" component={Propiedades} />
          <Route path="/propiedad" component={Propiedad} />
          <Route path="/Login" />
        </Switch>
      </Router>
    </div>
  );
};

export default AppEngine;
