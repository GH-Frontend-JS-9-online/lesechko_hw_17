import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Inbox from './Inbox';
import './mainScreen.scss';
import ListProject from '../listProject/ListProject';

export default props => (
	<div className="mainScreen root container-fluid p-0">
		<Header />
		<Aside />
		<Inbox
			massanger={props.massanger}
			listProject={props.listProject}
			amountProject={25}
		/>
		<ListProject listProject={props.listProject} />
	</div>
);
