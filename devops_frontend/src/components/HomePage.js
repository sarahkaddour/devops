
import React, { Component } from 'react';
import Footer from './Footer';
import Users from './Users';
import '../App.css';


class HomePage extends Component {
  render() {
    return (
      <div id="parent">
        <Users/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;