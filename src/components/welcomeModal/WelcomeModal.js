import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./welcomeModal.css"


const WelcomeModal = ({ show, handleClose, handleNameClick, setName }) => {
  return (
    <Modal
      contentClassName="name-modal"
      show={show}
    //   onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        {/* <Modal.Title>Modal title</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className="name-body">
          <article>
            <h6 className="name-request">ENTER YOUR NAME: </h6>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </article>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          bsPrefix="btn name-btn"
          onClick={handleNameClick}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
