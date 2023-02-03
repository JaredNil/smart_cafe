import React from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import './gifts.scss'

const Gifts = () => {
	return (
		<>
			<Header linkColor='seku' />
			<section className='giftRepresentation__wrapper wrapper'>
				<h1 className="title">Подарочные карты<br />smart_giftcard</h1>
				<div className="card">
					<img src="https://smartcafe.site/wp-content/uploads/2021/03/giftcard-300x200.png" alt="" />
				</div>
				<h4 className="representation">
					Порадуй своего друга или коллегу, подари сертификат в <br /> smart_cafe. Ты можешь купить карту и отправить её на <br /> email или в sms. Это очень удобно👍
				</h4>
				<a href='https://smartcafe.digift.ru/' target="_ blank" className="button">Купить</a>
			</section>
			<Footer />
		</>
	);
};

export default Gifts;