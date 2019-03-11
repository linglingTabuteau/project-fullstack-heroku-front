import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar">
        {/* attention: faut enlever light dans Navbar pour changer la color de NavItem */}
        <Navbar color="light" light expand="md" className="nav">
          <NavbarBrand href="/" style={{ color: 'rgb(126, 211, 69)' }}>MEMORY GHIBLI</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="colorgreen">
                <Link to="/affichefilm"><NavLink to="/affichefilm" style={{ color: 'rgb(126, 211, 69)' }}>List All films</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/admin/addfilm"><NavLink to="/admin/addfilm" style={{ color: 'rgb(126, 211, 69)' }}>Administrateur</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/signup"><NavLink style={{ color: 'rgb(126, 211, 69)' }}>Sign Up</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/signin"><NavLink style={{ color: 'rgb(126, 211, 69)' }}>Sign In</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
