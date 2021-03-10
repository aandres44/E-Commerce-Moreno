import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propiedades from "./pages/propiedades";
import Propiedad from "./pages/Propiedad";
import login from "./login";
import AddProperties from "./pages/AddProperties";
import Form from "./pages/Form/FormEngine";
const AppEngine = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/propiedades" component={Propiedades} />
          <Route path="/propiedad" component={Propiedad} />
          <Route path="/Login" component={login} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppEngine;
