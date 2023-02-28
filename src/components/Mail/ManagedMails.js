import { Fragment } from "react";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import { Button, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import useReceivedDataHttp from "../../http/received-http";
import { useHistory } from "react-router-dom";
//import { useSelector } from "react-redux";

const ManagedMails=()=> {
  const history = useHistory();
  // const show = useSelector(state=>state.auth.isLoggedIn)

  const buttonHandler = () => {
    localStorage.removeItem("Email");
    history.replace("/auth");
  };
  
  let count = 0;
  const result = useReceivedDataHttp();
  

  if (result.length === 0) {
    count = 0;
  } else {
    result.forEach((item) => {
      if (item.read === true) {
        count++
      };
    });
  }

  return (
    <Fragment>
      <div>
        <Navbar bg="info" variant="dark" className="justify-content-top">
          <Container>
            <Navbar.Brand>Mailbox </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button variant="danger" onClick={buttonHandler}>
                logout
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand >Sravani`s MailBox</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        
          <Row><NavLink to='/compose'>Compose mail</NavLink></Row>
          <Row>
          <NavLink to='/inbox' >Inbox mail <Badge bg="info">{count}</Badge></NavLink>
            </Row>
          <Row>
            <NavLink to='/sent' >Sent mail</NavLink>
          </Row>
       
        
      
    </Container>
  </Navbar>
  </Fragment>
  );
}

export default ManagedMails;
