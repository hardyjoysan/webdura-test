import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';

const Toptab = (props) => {

  return (
    <div className="toptab">
      <NavLink href="#" className="back_btn"></NavLink>
      <Nav>
        <NavItem>
          <NavLink href="#" className={props.status === "PENDING" ? "active" : ""} onClick={() => props.onTabSwitchClick("PENDING")}>
            Requests<span className="notify">1</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className={props.status === "ACTIVE" ? "active" : ""} onClick={() => props.onTabSwitchClick("ACTIVE")}>
            Services<span className="notify">2</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className={props.status === "PAYMENT" ? "active" : ""} onClick={() => props.onTabSwitchClick("PAYMENT")}>
            Payments<span className="notify">3</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        status: state.active_status
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onTabSwitchClick: (status) => {
            const action = {type: "BOOKING_TAB", status: status};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Toptab);
