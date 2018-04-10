import React, {Component} from 'react';
import bodyImage from './imgs/22.jpg';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                <img src={bodyImage} className="App-bImg" alt="body image"/>
                {/* <h1 class="body-text">Travel Around the World</h1> */}
            </div>
        );
    }
}

export default Body;
