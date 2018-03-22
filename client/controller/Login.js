import React, { Component  } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import LoginForm from '../views/LoginForm.js';

//import { Mongo } from 'meteor/mongo';
//CRMUsers = new Mongo.Collection('CRMUsers');
import { CRMUsers } from '../../imports/api/CRMUsers.js';
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
    const username = this.state.user.username;
    const password = this.state.user.password;
    var formData = {
      username: username,
      password : password
    }
    var user = CRMUsers.find({username}).fetch();
    if(user && user.length>0  && user[0].password== password){
      window.localStorage.setItem("user", (JSON.stringify(user[0])));
      window.location.reload();
    }else{
      successMessage = "Invalid Details.";
      window.localStorage.removeItem("user");
    }
      this.setState({
          successMessage
        });    
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