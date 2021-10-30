import './right.css';
import { ImCancelCircle } from "react-icons/im";
import ToggleSwitch from "./Toggle";
import {useState} from "react"; 

function Rightpart(){
  const [value, setValue] = useState(false);
    return(
        <div className="col-md-6">
          <div className="variation d-flex mt-5 ml-3">
            <h4>Create Variation</h4>
            <div className="custom-control custom-switch ml-5 mt-1 switch">
              <label className="custom-control-label" for="customSwitch1"><ToggleSwitch className="toggle1" isOn={value} onColor="#EF476F" handleToggle={() => setValue(!value)}/></label>
            </div>
          </div>
          <div className="button mt-4 mb-4 d-flex">
            <div> 
              <button className="btn btn-primary pl-3 pr-3" type="button">Add</button>
            </div>
            <div className="button-green ml-4 extra-space-align">
              <button className="btn btn-success p-0 pr-1 extra-button-space" type="button">Red <ImCancelCircle className="ml-1"/></button>
              <button className="btn btn-success p-0 pl-1 pr-1 ml-3" type="button">Green <ImCancelCircle className="ml-1"/></button>
            </div>
          </div>
          <div className="price-details border p-3 mt-5 rounded d-flex justify-content-between">
            <div>
              <button className="btn btn-success p-0 pl-3 pr-3" type="button">Red</button>
            </div>
            <div className="input">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="inputEmail4 " placeholder="Price"/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Sell price"/>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="inputAddress" placeholder="Enter Barcode"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="inputAddress" placeholder="Enter SKU"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Inventory"/>
                </div>
              </form>
            </div>
            
          </div>
          <div className="variation d-flex mt-5 ml-3">
            <h4>Item Returnable</h4>
            <div className="custom-control custom-switch ml-5 mt-1 switch">
              <label className="custom-control-label" for="customSwitch1"><ToggleSwitch className="toggle2" isOn={value} onColor="#EF476F" handleToggle={() => setValue(!value)}/></label>
            </div>
          </div>
        </div>
    )
}

export default Rightpart;