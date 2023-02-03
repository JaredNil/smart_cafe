import React from 'react';
import './Header.scss'
import Links from './links/Links';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<section className='smartCafe__header'>
			<div className="smartCafe__container container">
				<Link to="/" >
					<img className="logo " srcSet="https://smartcafe.site/wp-content/uploads/2020/04/smart_cafe_logo_long_50.png" width="250" height="50" sizes="250px" alt="smart_cafe - кофейня" />
				</Link>

				<div className="smartCafe__links">
					<Links linkColor={props.linkColor} />
				</div>

				<div className="burger">
					<span className='top'></span>
					<span className='middle'></span>
					<span className='down'></span>
				</div>
			</div>
		</section>
	);
};

export default Header;