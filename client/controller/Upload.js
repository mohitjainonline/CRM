import React, { Component } from "react";
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import BREADCRUMBCOMP from "../views/breadcrumb.js";
import Papa from "papaparse";
// App component - represents the whole app

import { CRMUsers, UserFiles, LeadData } from '../../imports/api/model.js';


export default class Upload extends Component {
constructor(props, context) {
    super(props, context);

    
    // set the initial component state
    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false,
      uploadedFiles: []
    };
    this.uploadIt = this.uploadIt.bind(this);
    this.onStartStopFile = this.onStartStopFile.bind(this);
    
    
  }


   


uploadIt(e){
    "use strict";
    e.preventDefault();

    let self = this;

    if (this.fileinput && this.fileinput.files && this.fileinput.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = this.fileinput.files[0];
      var LeadCount = LeadData.find().count();
      var Leads = [];
      var _this = this;
      Papa.parse( file, {
        header: true,
        complete( results, file ) {          
          if (file) {
            _this.setState({            
              inProgress: true // Show the progress bar now
            });

            UserFiles.insert({
              filename: file.name,
              ts: new Date(),
              isactive: false,
              isstart :false,
              compid : _this.props.user.compid,
              username : _this.props.user.username
            },function(err,docsInserted){     
              results.data.forEach(function(element) {
                LeadCount = LeadCount + 1;
                var lead = {
                  docid : docsInserted,
                  recordid: LeadCount,
                  isactive : true,
                  isdeleted : false,
                  ts: new Date(),  
                  compid : _this.props.user.compid,          
                  params : element
                }
                LeadData.insert(lead);                
              }, this);  
            });
          }
        }
      });
      this.UploadedFiles();  
      _this.setState({            
        inProgress: false // hide the progress bar now
      });    
    }
  }
// This is our progress bar, bootstrap styled
  // Remove this function if not needed
  showUploads() {   
    if (this.state.inProgress) {
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
 
  onStartStopFile(docid,isstart){
    Meteor.call('UpdateStartStop', docid, isstart);
  }

  UploadedFiles(){         
  if(_.isEmpty(this.state.uploadedFiles)){
    return null;
  }

      var row = [];

      this.state.uploadedFiles.forEach(function(element,i) {

        //var totalLead = LeadData.find({docid : element._id}).fetch.count();
        //var totalActiveLead = LeadData.find({docid : element._id,isactive: true}).count();
        var  isStart = ""
        var today = new Date(element.ts);
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var today = dd+'/'+mm+'/'+yyyy;
       


        if(element.isstart)
        {
          isStart = <a onClick={() => this.onStartStopFile(element._id,false)}>Start</a>;
        }
        else{
          isStart = <a onClick={() =>this.onStartStopFile(element._id,true)}>Stop</a>;
        }
        // <td>{totalLead}</td>
        // <td>{totalActiveLead}</td>
        row.push(
          <tr key={i}>
          <td>{element.filename}</td>          
          <td>{today}</td>
          <td>{isStart}</td>
          </tr>

        )
      }, this);

    
return <div className="col-lg-6">
<section className="panel">
  <header className="panel-heading no-border">Uploaded Files</header>
  <div className="form-group">
    <table className="table table-bordered">
      <thead>
        <tr>
        <th>File Name</th>        
        <th>Upload DateTime</th>
        <th>Start / Stop</th>
        </tr>
        </thead>

        <tbody>
        {row}
        </tbody>

      </table>
    
    
  </div>
  </section>
</div>
    
  
  
  }
  
  componentDidMount() {
    

    setTimeout(function(){
      Meteor.subscribe("UserFiles",this.props.user.compid);
      Meteor.subscribe("LeadData",this.props.user.compid);
      var uploadedFiles = []
      var _this = this;
       UserFiles.find({"compid" : this.props.user.compid}).observe({
        added: function(document) {
          uploadedFiles.push(document);
        },
        changed: function(new_document, old_document) {
           uploadedFiles.find(function(item, i){
            if(item._id === old_document._id){
              
              if(i > -1){
                uploadedFiles[i] = new_document
                _this.setState({
                  uploadedFiles : uploadedFiles
                });
              }
              
              return i;
            }
          });
          
          console.log(new_document)
        }
      }); 
      this.setState({
        uploadedFiles : uploadedFiles
      });      
    }.bind(this),1000)
  }

  render() {

    return (
      <div>
        <BREADCRUMBCOMP name="Upload XL" />

        <div className="row">
          <div className="col-lg-6">
            <section className="panel">
              <header className="panel-heading">Upload Files</header>
              <div className="panel-body">
                
                  <div className="form-group">
                    <label htmlFor="fileinput">File input</label>
                    <input type="file" id="fileinput" disabled={this.state.inProgress} ref={(ref) => this.fileinput = ref} />
                    <p className="help-block">
                      Upload excel data.
                    </p>
                  </div>
                  {this.showUploads()}
                  <button type="submit" className="btn btn-primary" disabled={this.state.inProgress} onClick={this.uploadIt}>
                    Submit 
                  </button>
                
              </div>
            </section>
          </div>
          {this.UploadedFiles()}
          



        </div>

        


      </div>
    );
  }
}
