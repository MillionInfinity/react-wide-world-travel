import React, { Component } from 'react';
import './App.css';
import Header from'./Header';
import Body from './Body';
import Footer from './Footer';
import Guides from './Guides';
import {Button} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
       <Guides />
         <Body/>
         
         <Footer/>
         </div>
    );
  }
}

export default App;
