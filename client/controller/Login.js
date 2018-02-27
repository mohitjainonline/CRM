import React, { Component  } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import LoginForm from '../views/LoginForm.js';

import { Mongo } from 'meteor/mongo';
CRMUser = new Mongo.Collection('CRMUsers');
//import { CRMUsers } from '../../imports/api/CRMUsers.js';
// App component - represents the whole app
export default class Login extends Component {
    /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        username: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
/**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    var formData = {
      username: username,
      password : password
    }
    var user = CRMUsers.find({username}).fetch();
    if(user && user.length>0  && user[0].password== password){
      successMessage = "Valid Details.";
    }else{
      successMessage = "Invalid Details.";
    }
      this.setState({
          successMessage
        });

    // var _this = this;
    // UserService.authenticate(formData).done(function(data){
    //   if(data.success == true)
    //   {
    //     // change the component-container state
    //     _this.setState({
    //       errors: {}
    //     });
    //     // save the token
    //     Auth.authenticateUser(data);
    //     // change the current URL to /
    //     _this.context.router.replace('/');
    //   } else {
    //     // failure

    //     // change the component state
    //     const errors = {};
    //     errors.summary = data.msg;

    //     _this.setState({
    //       errors
    //     });
    //   }
    // });
}
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;    
    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm       
      onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }
}
// export default withTracker(() => {
//   return {
//     CRMUsers: CRMUsers.find({}).fetch(),
//   };
// })(Login);