import React from 'react';
import Header from './../header/Header';
import './vacancy.scss'
import Footer from './../footer/Footer';

const Vacancy = () => {
	return (
		<>
			<Header linkColor='seku' />
			<section className="vacancy__wrapper">
				<div className="vacancy__container container">
					<div className="vacancy__title"><span>Вакансии</span></div>
					<div className="vacancy__offers">
						<div className="item">
							<div className="item__title">Бариста</div>
							<div className="item__info">

								Приглашаем стать частью профессионального коллектива сети кофеен Smart cafe!
								Обязанности: <br />
								• Приготовление кофе/чая/коктейлей/смузи и других позиций в меню в соответствии со стандартами компании;<br />
								• Качественное и быстрое обслуживание гостей кофейни;<br />
								• Поддержание Чистоты в кофейне на протяжении Рабочего дня<br />
								• Консультирование гостей по выбору напитка и других позиций меню кофейни ;<br />
								• Консультация покупателей в выборе кофе для домашнего приготовления и других товаров магазина;<br />
								• Работа с кассой.<br />
								Требования:<br />
								• Коммуникабельность , доброжелательность, грамотная речь, владение навыками продаж, умение работать в коллективе;<br />
								• Пунктуальность, аккуратность и ответственность;<br />
								• Интерес к кофейной индустрии, высокая обучаемость, желание расти и развиваться;<br />
								Условия:<br />
								• Работа в одной из лучших кофеен города;<br />
								• Оформление по ТК РФ;<br />
								• Сменный график работы (только полные смены);<br />
								• Обучение;<br />
								• Возможность развития и карьерного роста;<br />
								• Скидки и бонусы от компании<br />
								з/п 20+<br />


							</div>
							<div className="item_button__container">
								<a className="item__button" target="_ blank" href='https://docs.google.com/forms/d/e/1FAIpQLSdAfSVVNrrWfCg7usAc5vN3WLiktxBR3Ey7IOBdcmwnCTZlMg/viewform?vc=0&c=0&w=1' >
									Заполнить форму соискателя
								</a>
							</div>
						</div>

						<div className="item">
							<div className="item__title">Повар</div>
							<div className="item__info">

								Требуются повара на длительный срок не менее 6 месяцев<br />

								Тебе не обязательно иметь профессиональное образование, либо опыт работы. Достаточно иметь желание развиваться, любить готовить, создавать новые вкусы.<br />

								<span style={{ fontWeight: '700', letterSpacing: '0.6px' }}>Для нас важно чтобы ты был(а):</span><br />

								– Жизнерадостным;<br />
								– Коммуникабельным;<br />
								– Идейным;<br />
								– Проявлял инициативу;<br />
								– Был гибким и с легкость принимал перемены;<br />
								– Дисциплинирован, чистоплотен.<br />

								<span style={{ fontWeight: '700', letterSpacing: '0.6px' }}>Наши условия:</span><br />

								– Официальное трудоустройство<br />
								– Посменный график работы, почасовая оплата<br />
								– Своевременные выплаты 2 раза в месяц<br />
								– Работа на профессиональном оборудовании и инвентаре<br />
								– Удобная униформа<br />
								– Вкусное питание и система лояльности для наших сотрудников<br />

							</div>
							<div className="item_button__container">
								<a className="item__button" target="_ blank" href='https://docs.google.com/forms/d/e/1FAIpQLSdAfSVVNrrWfCg7usAc5vN3WLiktxBR3Ey7IOBdcmwnCTZlMg/viewform?vc=0&c=0&w=1' >
									Заполнить форму соискателя
								</a>
							</div>
						</div>
					</div>
				</div>
			</section >
			<Footer />
		</ >
	);
};

export default Vacancy;