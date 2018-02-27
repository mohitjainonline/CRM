import './main.html';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { mount } from 'react-mounter';
 
import App from './controller/App.js';
import Login from './controller/Login.js';
//import LoginForm from './views/LoginForm.js';
 

Meteor.startup(() => {
  //render(App, document.getElementById('render-target'));
});

FlowRouter.route('/', {  
  action() {
    mount(App, {
      main: <Login />,
    });
  },
});

FlowRouter.route('/login', {  
  action() {
    mount(App, {
      main: <Login />,
    });
  },
});
