import React from 'react';
import { Link } from 'react-router-dom'

const LinkBtn = (props) => {
	let hr = window.location.href.split('/')
	console.log(hr[hr.length - 1])

	return (
		<li className="link" >
			<Link to={`/${props.linkForBtn[0]}`}>
				{
					((props.linkColor === 'seku')
						? (hr[hr.length - 1] === props.linkForBtn[0])
							? <span className='seku active' >{`${props.linkForBtn[1]}`}</span>
							: <span className='seku' >{`${props.linkForBtn[1]}`}</span>
						: <span className='white'>{`${props.linkForBtn[1]}`}</span>)
				}
			</Link>
		</li>
	)
};

export default LinkBtn;


// window.location.href

//<span className='seku' >{`${props.linkForBtn[1]}`}</span>