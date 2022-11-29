import React from "react";

import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
	return (
		<>
			<div className="Navbar">
				<NavLink className="Navbar-link Navbar-home" to="/route-test">
					HOME
				</NavLink>
				<NavLink className="Navbar-link Navbar-blogs" to="/route-test/blogs">
					BLOGS
				</NavLink>
				<NavLink className="Navbar-link Navbar-contact" to="/route-test/contact">
					CONTACT
				</NavLink>
				<NavLink className="Navbar-link Navbar-layout" to="/route-test/layout">
					LAYOUT
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
