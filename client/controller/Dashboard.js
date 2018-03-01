import React, { Component } from "react";

import MainPage from "./MainPage.js";
// App component - represents the whole app
export default class Dashboard extends Component {


  constructor(props, context) {
    super(props, context);

    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    
    // set the initial component state
    this.state = {
      user: user
    };

    
  }
  Logout(){
    window.localStorage.removeItem("user");
    window.location.reload();
  }

  render() {
    return (
      <section id="container" className="">
        <header className="header dark-bg">
          <div className="toggle-nav">
            <div
              className="icon-reorder tooltips"
              data-original-title="Toggle Navigation"
              data-placement="bottom"
            >
              <i className="icon_menu" />
            </div>
          </div>

          <a href="index.html" className="logo">
            Nice <span className="lite">Admin</span>
          </a>

          <div className="nav search-row" id="top_menu">
            <ul className="nav top-menu">
              <li>
                <form className="navbar-form">
                  <input
                    className="form-control"
                    placeholder="Search"
                    type="text"
                  />
                </form>
              </li>
            </ul>
          </div>

          <div className="top-nav notification-row">
            <ul className="nav pull-right top-menu">
              <li id="task_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-task-l" />
                  <span className="badge bg-important">6</span>
                </a>
                <ul className="dropdown-menu extended tasks-bar">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 6 pending letter</p>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Design PSD </div>
                        <div className="percent">90%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          
                        >
                          <span className="sr-only">
                            90% Complete (success)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Project 1</div>
                        <div className="percent">30%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          
                        >
                          <span className="sr-only">
                            30% Complete (warning)
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Digital Marketing</div>
                        <div className="percent">80%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-info"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          
                        >
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Logo Designing</div>
                        <div className="percent">78%</div>
                      </div>
                      <div className="progress progress-striped">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow="78"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          
                        >
                          <span className="sr-only">78% Complete (danger)</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="task-info">
                        <div className="desc">Mobile App</div>
                        <div className="percent">50%</div>
                      </div>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          
                        >
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="external">
                    <a href="#">See All Tasks</a>
                  </li>
                </ul>
              </li>
              <li id="mail_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-envelope-l" />
                  <span className="badge bg-important">5</span>
                </a>
                <ul className="dropdown-menu extended inbox">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 5 new messages</p>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Greg Martin</span>
                        <span className="time">1 min</span>
                      </span>
                      <span className="message">
                        I really like this admin panel.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini2.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Bob Mckenzie</span>
                        <span className="time">5 mins</span>
                      </span>
                      <span className="message">
                        Hi, What is next project plan?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini3.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Phillip Park</span>
                        <span className="time">2 hrs</span>
                      </span>
                      <span className="message">
                        I am like to buy this Admin Template.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="photo">
                        <img alt="avatar" src="./img/avatar-mini4.jpg" />
                      </span>
                      <span className="subject">
                        <span className="from">Ray Munoz</span>
                        <span className="time">1 day</span>
                      </span>
                      <span className="message">Icon fonts are great.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">See all messages</a>
                  </li>
                </ul>
              </li>
              <li id="alert_notificatoin_bar" className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <i className="icon-bell-l" />
                  <span className="badge bg-important">7</span>
                </a>
                <ul className="dropdown-menu extended notification">
                  <div className="notify-arrow notify-arrow-blue" />
                  <li>
                    <p className="blue">You have 4 new notifications</p>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-primary">
                        <i className="icon_profile" />
                      </span>
                      Friend Request
                      <span className="small italic pull-right">5 mins</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-warning">
                        <i className="icon_pin" />
                      </span>
                      John location.
                      <span className="small italic pull-right">50 mins</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-danger">
                        <i className="icon_book_alt" />
                      </span>
                      Project 3 Completed.
                      <span className="small italic pull-right">1 hr</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-success">
                        <i className="icon_like" />
                      </span>
                      Mick appreciated your work.
                      <span className="small italic pull-right"> Today</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">See all notifications</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <span className="profile-ava">
                    <img alt="" src="img/avatar1_small.jpg" />
                  </span>
                  <span className="username">{this.state.user.name}</span>
                  <b className="caret" />
                </a>
                <ul className="dropdown-menu extended logout">
                  <div className="log-arrow-up" />
                  <li className="eborder-top">
                    <a href="/">
                      <i className="icon_profile" /> My Profile
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="icon_mail_alt" /> My Inbox
                    </a>
                  </li>
                  
                  
                  <li>
                    <a onClick={this.Logout.bind(this)}>
                      <i className="icon_key_alt" /> Log Out
                    </a>
                  </li>
                  
                  <li>
                    <a href="/">
                      <i className="icon_key_alt" /> Documentation
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
        <aside>
          <div id="sidebar" className="nav-collapse ">
            <ul className="sidebar-menu">
              <li className="active">
                <a className="" href="/">
                  <i className="icon_house_alt" />
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Dashboard
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />Dashboard
                  </li>
                </ol>
              </div>
            </div>
            <MainPage />
          </section>
        </section>
      </section>
    );
  }
}
