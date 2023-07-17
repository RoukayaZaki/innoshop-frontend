import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalAlert({ message, onAcceptance, onClose }) {
    const [show, setShow] = useState(true);

    const handleAcceptance = () => {
        onAcceptance();
        setShow(false);
    };

    const handleClose = () => {
        onClose();
        setShow(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleAcceptance}>
                        Ok
                    </Button>
                    <Button variant="outline-success" onClick={handleClose}>
                        Close me
                    </Button>
                </Modal.Footer>
            </Modal>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

export default ModalAlert;
