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
const Api_Key = "7c6212572dc00aca5008de2575471183";

class App extends Component {
  getWather = async (e)=> {
    e.preventDefault();
const api_call =fetch('http.api.openweathermap.org/data/2.5/weather?q=London&appid=${Api_key}&units='+'metric');
 const data = await api_call.json();
 console.log(data);
}
  render() {
    return (
      <div className="App">
         <Header/>
          <Body/>
           <Form getWather={this.getWather}/>
           <Weather/>
           <Guides />
         <Footer/>
         </div>
    );
  }
};

export default App;
