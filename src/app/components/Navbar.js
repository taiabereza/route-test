import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
	return (
		<>
			<div className="Navbar">
				<NavLink className="Navbar-link Navbar-home" to="/" activeStyle>
					HOME
				</NavLink>
				<NavLink className="Navbar-link Navbar-blogs" to="/Blogs" activeStyle>
					BLOGS
				</NavLink>
				<NavLink className="Navbar-link Navbar-contact" to="/Contact" activeStyle>
					CONTACT
				</NavLink>
				<NavLink className="Navbar-link Navbar-layout" to="/Layout" activeStyle>
					LAYOUT
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
