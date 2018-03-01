import React, { Component } from "react";

import BREADCRUMBCOMP from "../views/breadcrumb.js";
// App component - represents the whole app
export default class Upload extends Component {
  render() {
    return (
      <div>
        <BREADCRUMBCOMP name="Upload XL" />

        <div className="row">
          <div className="col-lg-6">
            <section className="panel">
              <header className="panel-heading">Basic Forms</header>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile" />
                    <p className="help-block">
                      Upload excel data.
                    </p>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
