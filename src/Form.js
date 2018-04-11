import React, {Component} from 'react';
import './Weather.css';
import {Button} from 'reactstrap';
import Footer from './Footer';


class Form extends Component {

    render() {
        return (
          <form class="input-group" onSubmit={this.props.getWeather}>
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                 <button class="btn btn-primary">Submit</button>
           </form>
        );
    }
}

export default Form;
