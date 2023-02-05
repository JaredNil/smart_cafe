import React from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import './bonus.scss'
import './../gifts/gifts.scss'

const Bonus = () => {
	return (
		<>
			<Header linkColor='seku' />
			<section className='bonusRepresentation__wrapper wrapper'>
				<h1 className="title">Бонусная программа<br />smart_cashback</h1>
				<h4 className="representation">
					Получай 5% бонусами с каждой покупки в smart_cafe
				</h4>
				<a href='https://iiko.biz/L/04021' target="_ blank" className="button bonus__card">Получить карту</a>
			</section>
			<Footer />
		</>
	);
};

export default Bonus;