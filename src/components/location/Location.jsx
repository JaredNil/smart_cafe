import React from 'react';
import Header from './../../components/header/Header';
import Footer from './../footer/Footer';
import './location.scss'

const Location = () => {
	return (
		<>
			<Header linkColor='seku' />

			<section className="locate container">

				<div className="locate__column">

					<div className="column">
						<h2 className="title">Москва</h2>
						<div className="dog">🤳🏼 @smart_cafe_moscow</div>
						<a className="menu" href='/'>МЕНЮ 🍳🥑☕️</a>

						<div className="market">
							<div className="market__location">
								<span>метро Бауманская</span>
								<span>Спартаковская площадь 16/15 стр. 2</span>
							</div>
							<div className="market__timing">
								<span>пн-пт 08:00-20:00 сб-вс 09:00-20:00</span>
								<span>+7(968)577-62-17</span>
							</div>
						</div>
					</div>

					<div className="column">
						<h2 className="title">Иркутск</h2>
						<div className="dog">🤳🏼 @smart_cafe</div>
						<a className="menu" href='/'>МЕНЮ 🍳🥑☕️</a>

						<div className="market">
							<div className="market__location">
								<span>На Дальневосточной</span>
								<span>Дальневосточная ул., 154/1</span>
							</div>
							<div className="market__timing">
								<span>пн-вс 08:00-20:00</span>
								<span>+7(964)740‒51-95</span>
							</div>
						</div>
						<div className="market">
							<div className="market__location">
								<span>На Красноказачьей</span>
								<span>Красноказачья ул., 74/2</span>
							</div>
							<div className="market__timing">
								<span>пн-вс 08:00-20:00</span>
								<span>+7(964)740‒51-96</span>
							</div>
						</div>

					</div>

				</div>
			</section>
			<Footer />
		</>
	);
};

export default Location;