import React, { Component } from 'react';
import './App.css';
import Header from'./Header';
import Footer from './Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
         <Header title="Wide World Travel"/>
         <Footer/>
      {/* <Footer> */}
          
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header> */}
          {/* <h1 className="App-title"> Welcome to Millions first react app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
