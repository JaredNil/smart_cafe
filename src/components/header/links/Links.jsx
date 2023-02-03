import React from 'react';
import { routerList } from './../../router/routerList';
import Lnk from './Lnk';

const Links = (props) => {
	return (
		<ul className="links">
			{routerList.map((linkForBtn, key) => {
				return <Lnk linkForBtn={linkForBtn} key={key} linkColor={props.linkColor} />
			})}
		</ul>
	)
};

export default Links;