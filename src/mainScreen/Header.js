import React from 'react';

export default () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed d-flex align-center">
		<a href="#" className="navbar-brand">
			<img
				src="./img/dashboard/logo.png"
				alt="main logo"
				className="header__logo"
			></img>
		</a>
		<ul className="navbar-nav ml-auto">
			<li className="nav-item pr-4">
				<button className="header__btn">Add</button>
			</li>
			<li className="nav-item pr-4">
				<img
					src="./img/dashboard/header1.png"
					alt="magnifier"
					className="header1"
				></img>
			</li>
			<li className="nav-item pr-4">
				<img
					src="./img/dashboard/header2.png"
					alt="bell"
					className="header2"
				></img>
			</li>
			<li className="nav-item pr-4 mr-1 img">
				<img
					src="./img/dashboard/foto/foto.png"
					alt="foto"
					className="header__foto"
				></img>
			</li>
		</ul>
	</nav>
);
