import React, { Component } from 'react';
import './App.css';
import Header from'./Header';
import Body from './Body';
import Footer from './Footer';
import Guides from './Guides';
import {Button} from 'reactstrap';
import Weather from './Weather';
import Travel from './Travel';


class App extends Component {
  
  render() {
    return (
      <div className="App">
         <Header/>
          <Body/>
          
           <Travel/> 
<div className = "weather-display" > <Weather/> </div> 
           <Guides />
         <Footer/>
         </div>
    );
  }
};

export default App;
