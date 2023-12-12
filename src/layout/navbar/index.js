import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom"
import logo from '../../logo.svg';
import './index.css';

export default ({items}) => (
    <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/"><img src={logo} className="logo" alt="logo" /></NavbarBrand>
        <Nav className="ml-md-auto d-md-flex pr-4" navbar>
            <NavItem>
                <NavLink tag={Link} to="/checkout/step-2"><div className="items">{items}</div> Items</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)