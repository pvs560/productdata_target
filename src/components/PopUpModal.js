import { Modal, Button } from 'react-bootstrap';
import React from "react";
import PropTypes from "prop-types";

export  const PopUpModal = (props) => {

    return (<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.headername}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
        {props.popupbody}
         </div>
        </Modal.Body>
        <Modal.Footer bsPrefix="flexjustifycontent paddingleft5 modal-footer">
            <Button id="createproduct"  onClick={props.onHide}>{props.footersave}</Button>
            <Button id="createproduct"  onClick={props.onReset}>{props.footerreset}</Button>
        </Modal.Footer>
    </Modal>)

}

PopUpModal.propTypes = {
    headername: PropTypes.string.isRequired,
    popupbody: PropTypes.any.isRequired,
    footersave: PropTypes.string.isRequired,
    footerreset:PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired
}