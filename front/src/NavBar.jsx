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
          <NavbarBrand href="/">MEMORY GHIBLI</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">List All films</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/addfilm"><NavLink to="/addfilm">Add film</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/addfilm"><NavLink to="/addfilm">Administrateur</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/signup"><NavLink>Sign Up</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/signin"><NavLink>Sign In</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
