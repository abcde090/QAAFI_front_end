/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';
// import { setCurrentUser, logoutUser } from './views/SignIn/store/actionCreators';

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import SignIn from "views/SignIn/SignIn";

// import BioMap from "./views/BioLevel3";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";

import BioMap from "./views/BioLevel3/example_00802";
import BioMap2 from "./views/BioLevel3/example_00803";
import BioMap3 from "./views/BioLevel3/example_00832";
import BioMap4 from "./views/BioLevel3/example_00833";
import BioMap5 from "./views/BioLevel3/example_00834";
import BioMap6 from "./views/BioLevel3/example_00835";
import BioMap7 from "./views/BioLevel3/example_00836";
import BioMap8 from "./views/BioLevel3/example_0082k2";
import BioMap9 from "./views/BioLevel3/example_81501";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/admin" component={Admin} />

        <Route path="/00802" component={BioMap} />
        <Route path="/00803" component={BioMap2} />
        <Route path="/00832" component={BioMap3} />
        <Route path="/00833" component={BioMap4} />
        <Route path="/00834" component={BioMap5} />
        <Route path="/00835" component={BioMap6} />
        <Route path="/00836" component={BioMap7} />
        <Route path="/0082k2" component={BioMap8} />
        <Route path="/0081501" component={BioMap9} />

        <Redirect from="/" to="/admin" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
