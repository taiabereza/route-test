import React from "react";

import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
	return (
		<>
			<div className="Navbar">
				<NavLink className="Navbar-link Navbar-home" to="/">
					HOME
				</NavLink>
				<NavLink className="Navbar-link Navbar-blogs" to="/blogs">
					BLOGS
				</NavLink>
				<NavLink className="Navbar-link Navbar-contact" to="/contact">
					CONTACT
				</NavLink>
				<NavLink className="Navbar-link Navbar-layout" to="/layout">
					LAYOUT
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
