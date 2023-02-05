import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import './index.scss';
import reportWebVitals from './reportWebVitals';

import router from './components/router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener('scroll', () => {
	if (window.location.pathname == '/') {
		console.log(window.scrollY)
		let temp = Array.from(document.getElementsByTagName('ul')[0].childNodes)

		if (window.scrollY !== 0) {
			document.getElementsByClassName('smartCafe__header')[0].classList.add('background-visible')
			temp.forEach(link => link.childNodes[0].childNodes[0].classList.add('seku'))
			temp.forEach(link => link.childNodes[0].childNodes[0].classList.remove('white'))

		} else {
			document.getElementsByClassName('smartCafe__header')[0].classList.remove('background-visible')
			temp.forEach(link => link.childNodes[0].childNodes[0].classList.add('white'))
			temp.forEach(link => link.childNodes[0].childNodes[0].classList.remove('seku'))
		}
	}
})

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
