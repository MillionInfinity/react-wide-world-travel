import React, { Component } from 'react';
import './App.css';
import Header from'./Header';
import Body from './Body';
import Footer from './Footer';
import Guides from './Guides';



class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Body/>
         <Guides/>
         <Footer/>
         </div>
    );
  }
}

export default App;
