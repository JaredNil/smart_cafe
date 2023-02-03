import React from 'react';
import './../../index.scss'
import './footer.scss'
const Footer = () => {
	return (
		<div className='footer__wrapper'>
			<div className='footer__container container'>
				<div className="footer__upline">
					<div className="footer__notice">
						Данное интернет-представительство носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ.
					</div>
					<div className="footer__logotype">
						<img src="https://smartcafe.site/wp-content/uploads/2019/11/smart_logo-150x150.png" alt="" />
					</div>
				</div>
				<div className="footer__downline">
					<span>smart_cafe © 2023</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;