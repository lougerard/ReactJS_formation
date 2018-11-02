import React, { Component } from 'react';
import Meteo from '../../component/meteo/meteo'
import ElementListItem from '../../component/elementListItem/elementListItem'

function ElementList(props) {
	const list = props.list;
	const listItems = list.map(
		(elem) => <ElementListItem elem={elem} key={elem} />
	);

	return (
		<ul className="list-group">
			{listItems}
		</ul>
	);
}
export default ElementList