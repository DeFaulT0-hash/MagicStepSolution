import React from 'react'
import { MdOutlineBrokenImage } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";

function Bottom(){
    return(
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="row-title d-md-flex d-sm-none d-xs-none">
                    <div className="h5">Latest Reviews</div>
                    <div>
                        <button className="btn btn-success" type="button">View All</button>
                    </div>
                </div>
                <div className="card">
                    <div className="row-title d-sm-flex d-md-none">
                        <div className="h5">
                            Latest Reviews
                        </div>
                        <div>
                        <button className="btn btn-success" type="button">View All</button>
                        </div>
                    </div>
                    <div className="main-card-view">
                        <div className="row">
                            <div className="col-3">
                                <MdOutlineBrokenImage className="imgbroke"/>
                            </div>
                            <div className="col-9 h6">
                                <div>Apple iPhone 12</div>
                                <div>
                                    <span style={{color : 'rgb(6, 201, 6)'}}>*</span>
                                    4.5
                                </div>
                                <div>Very Nice</div> 
                                <div>Good Quality As Described</div>
                                <div>
                                    <MdOutlineBrokenImage className="imgbroke"/>
                                    <MdOutlineBrokenImage className="imgbroke"/>
                                </div>
                                <div>
                                    Gaurav Sharma , delhi
                                </div>
                                <div>
                                    Feb,2020
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="input-format">
                                        <input type="text" placeholder="Send reply"/>
                                        <FaRegPaperPlane className="paperplane"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">

            </div>
        </div>
    )
}

export default Bottom;