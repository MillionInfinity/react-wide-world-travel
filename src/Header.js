import React, { Component } from 'react';
import logo from './imgs/images.jpg';
import bodyImage from './imgs/1.jpg';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="App-title">Wide World Traveler </h1>
          {/* <img src={logo} className="App-logo" alt="logo" />  */}
            
        
            </div>
        );
    }
}

export default Header;
