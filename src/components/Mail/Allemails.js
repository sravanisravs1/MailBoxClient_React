import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import classes from "./Allmails.module.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AllEmails = (props) => {
  const { from, subject, id, message, read } = props.item;

  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");
  let checkread = read;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
  
    fetch(
      `https://reacthttp-37efe-default-rtdb.firebaseio.com/mailbox/${email}/received/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          read: false,
        }),
      }
    );
    setShow(true);
  };
  const handleClose1 = () => {
    fetch(
      `https://reacthttp-37efe-default-rtdb.firebaseio.com/mailbox/${email}/received/${id}.json`,
      {
        method: "DELETE",
      }
    )
    alert("Are you sure you want to delete?");
    setShow(false);
  };
 

  //////////=====working with modals

  let seenCheck = checkread === true ? "💥💥💥" : " ";
 
  return (
    <Fragment>
      <div>
        <Container className="justify-content-md-center" onClick={handleShow}>
          <div className={classes.dv1}>
            <Row>
              <Col>Received from  ::{from}</Col>
              <Col xs={6}>subject::{subject}</Col>
              {seenCheck}
            </Row>
          </div>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>From : {from}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject : {subject}</Form.Label>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message : {message}</Form.Label>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleClose1}>
              Delete Mail
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AllEmails;
