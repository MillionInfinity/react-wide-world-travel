import React, {Component} from 'react';
import bodyImage from './imgs/1.jpg';
import './index.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                <img src={bodyImage} className="App-bImg" alt="body image"/>
            </div>
        );
    }
}

export default Body;
