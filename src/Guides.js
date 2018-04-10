import React, {Component} from 'react';
import './Guide.css';
import json from './Guide.json';

            function Guides(props) {
                console.log(json);
                return (
                    <React.Fragment>
                        {json.guides.map(bGuides => {
                                return <div className="guideCard">
                                    <div class="float-right">
                                     {/* <div class="card">  */}
                                     <p class="giude-cards"> 
                                    <li className="guide-type">{bGuides.type}</li>
                                    <li className="guide-title">{bGuides.title}</li>
                                    <li className="guide-price">{bGuides.price}</li>
                                     </p> 
                                    </div>
                                    </div>
                                    {/* </div> */}
                            })}
                    </React.Fragment>
                )
            }

export default Guides