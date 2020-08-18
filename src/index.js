// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Create Import File
import "./index.scss";

import PortfolioLanding from "./home/PortfolioLanding";
import DarkPortfolioLanding from "./dark/PortfolioLanding";
import Portfolio from "./blocks/Portfolio";
import DelPrado from "./elements/projects/DelPrado";
import Nurumia from "./elements/projects/Nurumia";
import Grisu from "./elements/projects/Grisu";
import error404 from "./elements/error404";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DarkPortfolioLanding}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-landing`}
            component={PortfolioLanding}
          />

          {/* Element Layout */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-delprado`}
            component={DelPrado}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-nurumia`}
            component={Nurumia}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-grisu`}
            component={Grisu}
          />

          {/* Blocks Elements  */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio`}
            component={Portfolio}
          />
          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
