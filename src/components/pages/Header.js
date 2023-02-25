import React from "react";
import { Nav, NavLink } from "react-bootstrap";

const Header = () => {

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home" style={{backgroundColor:'#7cc0d8'}}  >
      <Nav.Item>
        <NavLink to="/mail">ComposeMail</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/auth" eventKey="link-1">
          Sent
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink eventKey="link-2">Unread</NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Header;