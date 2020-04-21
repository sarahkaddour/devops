
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';


class AccessDenied extends Component {
  render() {
    return (
      <div className="parent">
        <div className="access-denied">
                <h1> <i className="logo fa fa-exclamation-triangle fa-10x" aria-hidden="true"></i> </h1>
                <h1>Don't let the seeds stop you from enjoying Watermelon...</h1>
                <h3>(You must be logged in to access this page)</h3>
                <Link to="/signin" > <p>← Go to Sign In page </p></Link>
        </div>
    </div>
       
    );
  }
}

export default AccessDenied;