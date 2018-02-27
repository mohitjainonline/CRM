import "./main.html";
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { mount } from "react-mounter";

import App from "./controller/App.js";
import Login from "./controller/Login.js";

import Dashboard from "./controller/Dashboard.js";
import MainPage from "./controller/MainPage.js";

//import LoginForm from './views/LoginForm.js';

Meteor.startup(() => {
  //render(App, document.getElementById('render-target'));
});

FlowRouter.route("/", {
  action() {
    if (window.localStorage.getItem("user") != null) {
      mount(Dashboard, {
        main: <MainPage />
      });
    } else {
      mount(App, {
        main: <Login />
      });
    }
  }
});

FlowRouter.route("/login", {
  action() {
    mount(App, {
      main: <Login />
    });
  }
});
FlowRouter.route("/dashboard", {
  action() {
    mount(Dashboard, {
        main: <MainPage />
      });
  }
});