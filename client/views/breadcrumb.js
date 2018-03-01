import React from 'react';
 
const breadcrumb = ({
   
}) =>(
    <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-laptop"></i> {this.props.name}</h3>
            <ol className="breadcrumb">
              <li><i className="fa fa-home"></i><a href="/">Home</a></li>
              <li><i className="fa fa-laptop"></i>{this.props.name}</li>
            </ol>
          </div>
        </div>
);



export default breadcrumb