import React, {Component} from 'react';
import './Guide.css';
import json from './Guide.json';

            function Guides(props) {
                console.log(json);
                return (
                    <React.Fragment>
                        {json.guides.map(bGuides => {
                                return <div className="container">
                                    <div className="row">
                                    <div className="col-md-4 col-sm-6"></div>
                                    <div className="col-md-4 col-sm-6"></div>
                                    <div className="col-md-4 col-sm-6">
                                     <div className="card">
                                        <li id="dg" href="" className="guide-type"><a>{bGuides.type}</a></li>
                                        <li id="dg" href="" className="guide-title"><a>{bGuides.title}</a></li>
                                        <li id="dg" href="" className="guide-price"><a>{bGuides.price}</a></li>
                                   </div>
                                    </div>
                                    </div>
                                   </div>
                            })}
                    </React.Fragment>
                )
            }

export default Guides