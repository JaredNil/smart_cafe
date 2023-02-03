import React from 'react';
import './main.scss'
import Header from './../header/Header';

const Main = () => {
	return (
		<>
			<Header />
			<div className="main wrapper">
				<div className="main__cup" />
				<div className="main__phrase">
					work hard <br />
					chill smart
				</div>
				<div className="main__footer">
					smart_cafe © 2023
				</div>
			</div>
		</>
	);
};

export default Main;