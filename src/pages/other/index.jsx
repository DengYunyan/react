import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';

import Menu from "@components/common/menu/index";
import Router from "./router/index";

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Router />
    </div>
  </HashRouter>,
  document.getElementById('app')
);