import React, { Component } from 'react';
import Meteo from '../../component/meteo/meteo'
import './elementListItem.css'

function ElementListItem(props) {
	const city = props.elem;

	return (
		<li className="list-group-item" className="dot">
			<div>
				<Meteo city={city}/>
			</div>
		</li>
	);

}
export default ElementListItem