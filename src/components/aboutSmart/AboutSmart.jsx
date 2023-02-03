import React from 'react';
import Header from './../header/Header';
import { Link } from 'react-router-dom';
import './../../index.scss'
import './aboutSmart.scss'
import Footer from './../footer/Footer';

const AboutSmart = () => {
	return (
		<>
			<Header linkColor='seku' />
			<section className="aboutSmart container">
				<div className="aboutSmart__title">smart_cafe</div>
				<div className='aboutSmart__text'>Смарт_кафе – это сеть современных городских кофеен формата fast casual.
					В основе концепции smart_cafe лежит идея закрыть ежедневные потребности современного человека,
					который всегда находится в движении, занят работой или учебой, предпочитает качественную еду и
					знает что такое «хороший кофе». Мы стремимся облегчить жизнь наших гостей, экономить их время, даря заряд
					бодрости и положительных эмоций качественным, вкусным продуктом и хорошим обслуживанием. Идем в ногу со временем,
					внедряя современные тренды, постоянно вдохновляя и удивляя наших гостей. Здесь каждый найдет что-то по душе: и
					приверженцы здорового питания, и те, кто знает как себя побаловать.Первая наша кофейня открылась 2014 году.
					На сегодняшний день в сети работает&#160;<Link to="/location">9 кофеен</Link>&#160;в двух городах России: в Иркутске и Москве.
				</div>
			</section>
			<Footer />
		</>
	);
}
export default AboutSmart;
