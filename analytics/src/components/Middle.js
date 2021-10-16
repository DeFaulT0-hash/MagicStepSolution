import React from 'react'
import {AiFillCaretDown} from "react-icons/ai";
import { MdOutlineBrokenImage } from "react-icons/md";

function Middle(){
    return(
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="card">
                    <div className="main-card-view">
                        <div>
                            Sales
                            <AiFillCaretDown/>
                        </div>
                        <div className="decr">
                            Select Date
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="icon-content-center"> 
                    <div className="">
                        <div className="card">
                            <MdOutlineBrokenImage className="imgbroke"/>
                            <div>Customer</div>
                            <div>Total 78</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="card">
                            <div className="d-sm-none d-xs-none d-md-inline-block justify-content-center">
                                <MdOutlineBrokenImage className="imgbroke"/>
                                <div>
                                    Trends
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle;