import React, { Component } from 'react';
import logo from './imgs/images.jpg';
import bodyImage from './imgs/1.jpg';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
          <img src={logo} className="App-logo" alt="logo" /> 
              {this.props.title}
          <div className="body">
           
              <img src={bodyImage} className="App-bImg" alt="body image" />   
               </div>
                
            </div>
        );
    }
}

export default Header;
