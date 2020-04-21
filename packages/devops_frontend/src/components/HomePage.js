
import React, { Component } from 'react';
import Footer from './Footer';
import Players from './Players';
import '../App.css';


class HomePage extends Component {
  render() {
    return (
      <div id="parent">
        <Players/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;