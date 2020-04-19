import React from 'react';
import {
  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

const Header = (props) => {

  return (
    <div className="top_head">
      <Navbar>
        <NavbarToggler />
        <NavLink href="#" className="search">
          <img src="/images/header_search_normal.svg" alt="search" />
        </NavLink>
        <NavbarBrand href="/">
          <img src="/images/trova_logo.png" alt="logo" />
        </NavbarBrand>
        <Nav>
            <NavItem>
              <NavLink href="#">
                <img src="/images/header_chat_normal.svg" alt="chat" />
                <span className="red_dot"></span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="notific">
                <img src="/images/menu_notification_normal.svg" alt="notification" />
                <span className="red_dot"></span>
              </NavLink>
            </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
