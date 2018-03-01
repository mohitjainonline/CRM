import React from 'react';
 
const breadcrumb = ({
   name
}) =>(
    <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-laptop"></i> {name}</h3>
            <ol className="breadcrumb">
              <li><i className="fa fa-home"></i><a href="/">Home</a></li>
              <li><i className="fa fa-laptop"></i>{name}</li>
            </ol>
          </div>
        </div>
);



export default breadcrumb