import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Toptab = (props) => {
  return (
    <div className="toptab">
      <NavLink href="#" className="back_btn"></NavLink>
      <Nav>
        <NavItem>
          <NavLink href="#" className="active">Requests<span className="notify">1</span></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Services<span className="notify">2</span></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Payments<span className="notify">3</span></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Toptab;
