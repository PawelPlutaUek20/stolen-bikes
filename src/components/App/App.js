import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageIndex from "../PageIndex/PageIndex";
import PageDetail from "../PageDetail/PageDetail";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={PageIndex} />
        <Route path="/case/:id" component={PageDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
