import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends Component {
	constructor() {
    super();
	    this.state = {
	    }
	}

	render() {
		return (
			<header className='header'>
			<div className='container'>
				<Navbar color="faded" light expand="md">
		          <NavbarBrand href="/">newLook</NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              	<NavItem>
		                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
		              </NavItem>
		              <NavItem>
		                <NavLink to="/aboutus" activeClassName="active">About us</NavLink>
		              </NavItem>
		              <UncontrolledDropdown nav inNavbar>
		                <DropdownToggle nav caret>
		                  Username
		                </DropdownToggle>
		                <DropdownMenu >
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
			</header>
		)
	}
}


export default Header;