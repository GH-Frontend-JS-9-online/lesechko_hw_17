import React from 'react';
import './ListItem.scss';

const ListItem = props => {
	return (
		<ul className="ListItem">
			<li className="title">
				<h3 className="title__mainTitle">{props.mainTitle}</h3>
				<p className="title__subtitle subtitle">{props.subtitle}</p>
			</li>
			<li className="value">
				<p className="value__price">{props.value}</p>
			</li>
			<li className="deadline">
				<h3 className="deadline__mainTitle">{props.deadlineMainTitle}</h3>
				<p className="deadline__subtitle subtitle">{props.deadlineSubtitle}</p>
			</li>
			<li className="timeSpent">
				<p className="timeSpent__hours">{props.timeSpent}</p>
			</li>
			<li className="ListItem__progress">
				<p className="progress__value">{props.progress}</p>
				<div className="progress__progressLine">
					<span></span>
				</div>
			</li>
			<li className="status">
				<p>{props.status}</p>
			</li>
			<li className="assignedTo">
				<div className="assignedTo__wrapper">
					<div className="assignedTo__wrapperImg">
						<img src={props.assignedToFoto} alt="foto" />
					</div>
					<div>
						<h3 className="assignedTo__title">{props.assignedToTitle}</h3>
						<p className="assignedTo__subtitle subtitle">
							{props.assignedToSubTitle}
						</p>
					</div>
				</div>
			</li>
			<li>
				<span></span>
			</li>
		</ul>
	);
};

export default ListItem;
