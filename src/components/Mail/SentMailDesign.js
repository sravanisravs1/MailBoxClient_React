import React, { Fragment,useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Allmails.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const SentMailss = (props) => {
  const { to, subject, id, message } = props.item;

  const [show, setShow] = useState(false);

  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  const delethandler = () => {
    fetch(
      `https://reacthttp-37efe-default-rtdb.firebaseio.com/mailbox/${email}/sent/${id}.json`,
      {
        method: "DELETE",
      }
    );
    alert("Are you sure you want to delete?");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 
  return (
    <Fragment>
      <div>
        <Container className="justify-content-md-center" onClick={handleShow}>
          <div className={classes.dv1}>
            <Row>
              <Col>Sent to ::{to}</Col>
              <Col xs={6}>Subject::{subject}</Col>
            </Row>
          </div>
        </Container>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TO:{to}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>SUBJECT:{subject}</Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>MESSAGE:{message}</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={delethandler}>
              Delete Mail
            </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default SentMailss;