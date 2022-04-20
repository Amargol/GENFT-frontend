import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";

const PreviewModal = (props) => {
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
        <h3>Preview of Asset</h3>
        <p className="text-center">The base asset has been successfully deployed onto IPFS</p>
        
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
            <iframe src={"http://35.232.44.3:8080/ipfs/" + props.cid}  height="200" width="300" title="IPFS Frame"></iframe>
        </div>
        <a href={"http://35.232.44.3:8080/ipfs/" + props.cid} className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close">Visit on IPFS </a>
    </div>
    </Modal>
    
  );
};

export default PreviewModal;