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
  DropdownItem,
} from 'reactstrap';
import { Link} from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="NavBar">
        <Navbar color="light" expand="md">
          <NavbarBrand href="/">Home Imaginal Cinema</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">List All films</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/addfilm"><NavLink to="/addfilm">Add film</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/addfilm"><NavLink>Sign Up</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/addfilm"><NavLink>Sign In</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
