import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";
import Header from "./Header";

const Form = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/form/step1" component={Step1} />
        <Route path="/form/step2" component={Step2} />
        <Route path="/form/step3" component={Step3} />
        <Route path="/form/result" component={Result} />
      </Switch>
    </div>
  );
};

export default Form;
