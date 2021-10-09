import {BsImage} from 'react-icons/bs'
import Rightpart from './Rightpart'
// import Form1 from './Form1'

function Leftpart(){
    return(
            <div className="row">
                <div className="col-md-6">
                    <h4>Add Products</h4>
                    <h6 class="pt-2">Add Product Images</h6>
                    <p class="product-description w-75" style={{opacity:'0.56'}}>Add upto 5 images, first Image will be your product's cover image that will highlight everywhere.</p>
                    <label for="image"><BsImage style={{'font-size':'6rem', opacity:'0.75'}}/></label>
                    <input class="d-none" type="file" name="" id="image"/>
                    <form action="">
                        <div className="form-group">
                            <label for="my-input">
                            <h5>Product name</h5>
                            </label>
                            <input id="my-input" className="form-control border-0 mb-5" type="text" name="" style={{'border-radius': '8px', 'background-color': '#e4e4e4'}}/>
                        </div>
                        <div className="form-group">
                            <label for="my-input">
                            <h5>Product meta description</h5>
                            </label>
                            <input id="my-input" className="form-control border-0 mb-5" type="text" name="" style={{'border-radius': '8px', 'background-color': '#e4e4e4'}}/>
                        </div>
                        <div className="form-group">
                            <label for="my-input">
                            <h5>Product description</h5>
                            </label>
                            <input id="my-input" className="form-control border-0" type="text" name="" style={{'border-radius': '8px', 'background-color': '#e4e4e4'}}/>
                        </div>
                        </form>
                </div>
                <Rightpart/>
            </div>
    )
}


export default Leftpart;