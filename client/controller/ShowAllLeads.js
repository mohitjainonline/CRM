import React, { Component } from "react";
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import BREADCRUMBCOMP from "../views/breadcrumb.js";

import { CRMUsers, UserFiles, LeadData } from '../../imports/api/model.js';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class ShowAllLeads extends Component {
constructor(props, context) {
    super(props, context);    
    // set the initial component state
    this.state = {    
      UploadedLeads:[] ,
      columns : [{
        Header: 'Record Id',
        accessor: 'recordid' // String-based value accessors!
      }],
      files: []
    };
    
    
      
  }
  UploadedLeads(){         
    if(_.isEmpty(this.state.UploadedLeads)){
      return null;
    }
  
    var columns = this.state.columns;
    
    
    var doc = this.state.files[0]
    
        if(doc){
          doc.fieldstodisplay.forEach(function(item,i){
            for (var key in item) {
                if (item.hasOwnProperty(key)) {      
                     
                    //dynamicheader.push(<th>{item[key]}</th>);
                    columns.push({
                      Header: item[key],
                      accessor: 'params.' + key // String-based value accessors!
                    })
                  
                  
                }                    
            
            }  
          });
        }
        this.setState({columns : columns});  
    
    }
  componentDidMount() {   
   
    setTimeout(function(){
      Meteor.subscribe("UserFiles",this.props.user.compid);
      Meteor.subscribe("LeadData",this.props.user.compid);
      console.log(this.props.user)
      debugger
      var UploadedLeads = []
      var _this = this;

      var files= UserFiles.find({"compid" : this.props.user.compid}).fetch();
      console.log(files)
      var docids = [];
      files.forEach(function(element) {
        docids.push(element._id)
      }, this);

      if(docids.length<1){
        return;
      }
      console.log("UploadedLeads")
      UploadedLeads = LeadData.find({"docid" : {$in : docids}}).fetch();
      console.log(UploadedLeads)
      
      // .observe({
      //   added: function(document) {
      //     UploadedLeads.push(document);
      //   },
      //   changed: function(new_document, old_document) {
      //      UploadedLeads.find(function(item, i){
      //       if(item._id === old_document._id){
              
      //         if(i > -1){
      //           UploadedLeads[i] = new_document
      //           _this.setState({
      //             UploadedLeads : UploadedLeads
      //           });
      //         }              
      //         return i;
      //       }
      //     });
          
      //     console.log(new_document)
      //   }
      // }); 

      this.setState({
        UploadedLeads : UploadedLeads,
        files : files
      });      
      this.UploadedLeads()
    }.bind(this),3000)
    
  }

   

  render() { 
if(this.state.columns.length<3){
  return null;
}
    return (
      <div>
        <BREADCRUMBCOMP name="Active Leads" />

        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">All Active Leads</header>
              <div className="panel-body">
              <ReactTable
                data={this.state.UploadedLeads}
                columns={this.state.columns}
              />
              </div>
            </section>
          </div>
         
        </div>

      </div>
    );
  }
}
