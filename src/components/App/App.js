import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageIndex from "../../pages/PageIndex/PageIndex";
import PageDetail from "../../pages/PageDetail/PageDetail";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={PageIndex} />
        <Route path="/case/:id" component={PageDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
