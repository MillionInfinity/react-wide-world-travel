import React, { Component } from 'react';
import logo from './logo.svg';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
               
                  <ul className="App-footer">
                        <li><a href="" target="#">Chichago</a></li>
                        <li><a href="" target="_black">Atlanta</a></li>
                        <li><a href="" target="_black">Nashville</a></li>
                        <li><a href="" target="_black">Seattle</a></li>
                 </ul>
                     <span class="copyr">&copy;2018 MillionTravels.</span>
          
            </div>
        );
    }
}

export default Footer;
