import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-danger mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white mx-2">PokeApi</span>
			</Link>
		</nav>
	);
};
