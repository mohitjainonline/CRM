import React, { Component } from "react";
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import BREADCRUMBCOMP from "../views/breadcrumb.js";
// App component - represents the whole app
export default class Upload extends Component {
constructor(props, context) {
    super(props, context);

    
    // set the initial component state
    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false
    };
    this.uploadIt = this.uploadIt.bind(this);
    //this.showUploads = this.showUploads.bind(this);
        
  }


   


uploadIt(e){
    "use strict";
    e.preventDefault();
debugger;
    let self = this;

    if (this.fileinput && this.fileinput.files && this.fileinput.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = this.fileinput.files[0];

      if (file) {
        let uploadInstance = UserFiles.insert({
          file: file,
          meta: {
            locator: self.props.fileLocator,
            userId: Meteor.userId() // Optional, used to check on server for file tampering
          },
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true // If you see issues with uploads, change this to false
        }, false);

        self.setState({
          uploading: uploadInstance, // Keep track of this instance to use below
          inProgress: true // Show the progress bar now
        });

        // These are the event functions, don't need most of them, it shows where we are in the process
        uploadInstance.on('start', function () {
          console.log('Starting');
        });

        uploadInstance.on('end', function (error, fileObj) {
          console.log('On end File Object: ', fileObj);
        });

        uploadInstance.on('uploaded', function (error, fileObj) {
          console.log('uploaded: ', fileObj);

          // Remove the filename from the upload box
          self.refs['fileinput'].value = '';

          // Reset our state for the next file
          self.setState({
            uploading: [],
            progress: 0,
            inProgress: false
          });
        });

        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error);
        });

        uploadInstance.on('progress', function (progress, fileObj) {
          console.log('Upload Percentage: ' + progress);
          // Update our progress bar
          self.setState({
            progress: progress
          })
        });

        uploadInstance.start(); // Must manually start the upload
      }
    }
  }
// This is our progress bar, bootstrap styled
  // Remove this function if not needed
  showUploads() {
    console.log('**********************************', this.state.uploading);

    if (!_.isEmpty(this.state.uploading)) {
      return <div>
        {this.state.uploading.file.name}

        <div className="progress progress-bar-default">
          <div style={{width: this.state.progress + '%'}} aria-valuemax="100"
             aria-valuemin="0"
             aria-valuenow={this.state.progress || 0} role="progressbar"
             className="progress-bar">
            <span className="sr-only">{this.state.progress}% Complete (success)</span>
            <span>{this.state.progress}%</span>
          </div>
        </div>
      </div>
    }
  }

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
                    <input type="file" id="fileinput" disabled={this.state.inProgress} ref={(ref) => this.fileinput = ref} />
                    <p className="help-block">
                      Upload excel data.
                    </p>
                  </div>
                  {this.showUploads()}
                  <button type="submit" className="btn btn-primary" disabled={this.state.inProgress} onClick={this.uploadIt}>
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
