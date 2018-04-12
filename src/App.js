import React, { Component } from 'react';
import './App.css';
import Header from'./Header';
import Body from './Body';
import Footer from './Footer';
import Guides from './Guides';
import {Button} from 'reactstrap';
import Weather from './Weather';
import Form from './Form';
// const Api = 'http://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {
  
  render() {
    return (
      <div className="App">
         <Header/>
          <Body/>
           {/* <Form/> */}
          {/* <Weather/> */}
<div className = "weather-display" > <Weather/> </div> 
           <Guides />
         <Footer/>
         </div>
    );
  }
};

export default App;
