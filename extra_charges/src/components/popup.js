import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './popup.css';

function Popup(){

    const [show, setShow] = useState(false);

    const [radi0,setradi0]=useState({
      isAgree : false,
      choise : ""
    });



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
          <Button variant="primary" className="fa fa-plus rounded-circle bg-success mb-2 text-white" style={{background:'green'}} onClick={handleShow}>
            +
           </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Manage Extra Charges</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className="addcharges" >
                  <h1>
                    Add Charges
                  </h1>
                  <div className="radio-t">
                    <div className="form-check mx-auto">
                      <input className="rad0" name="choise" value="Flat" type="radio"/>
                      Flat
                    </div>
                    <div className="form-check mx-auto">
                    <input className="rad0" name="choise" value="Percentage" type="radio"/>
                    Percentage
                    </div>
                  </div>
                  <input className="in" type="text" placeholder="Enter Name"/>
                  <input className="in" type="text" placeholder="Enter Rate"/>
                </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" style={{background:'green'}}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Popup;