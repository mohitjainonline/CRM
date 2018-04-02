import "./main.html";
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { mount } from "react-mounter";

import App from "./controller/App.js";
import Login from "./controller/Login.js";

import Dashboard from "./controller/Dashboard.js";
import MainPage from "./controller/MainPage.js";
import Upload from "./controller/Upload.js";
import ShowAllLeads from "./controller/ShowAllLeads.js";



Meteor.startup(() => {
  //render(App, document.getElementById('render-target'));
});

FlowRouter.route("/", {
  action() {    
    if (window.localStorage.getItem("user") != null) {
      var user = JSON.parse(window.localStorage.getItem("user"));
      mount(Dashboard, {
        main: <ShowAllLeads user={user}/>
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
    if (window.localStorage.getItem("user") != null) {
      var user = JSON.parse(window.localStorage.getItem("user"));
      mount(Dashboard, {
        main: <ShowAllLeads user={user}/>
      });
    } else {
      mount(App, {
        main: <Login />
      });
    }

  }
});
FlowRouter.route("/upload", {
  action() {
    if (window.localStorage.getItem("user") != null) {
      var user = JSON.parse(window.localStorage.getItem("user"));
    mount(Dashboard, {
        main: <Upload user={user}/>
      });
    } else {
      mount(App, {
        main: <Login />
      });
    }
  }
});

FlowRouter.route("/showallleads", {
  action() {
    if (window.localStorage.getItem("user") != null) {
      var user = JSON.parse(window.localStorage.getItem("user"));
    mount(Dashboard, {
        main: <ShowAllLeads user={user}/>
      });
    } else {
      mount(App, {
        main: <Login />
      });
    }
  }
});