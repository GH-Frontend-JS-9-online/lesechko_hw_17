import React, {Component} from 'react';
import './ListProject.scss';
import ListItem from './ListItem/ListItem';

export default class listProject extends Component {
	state = {
		listProject: [
			{
				mainTitle: 'New website',
				subtitle: 'Microsoft',
				value: '$2300',
				deadline: {
					mainTitle: '15 May 2016',
					subtitle: '10 days left',
				},
				timeSpent: '40 hours',
				progress: '70%',
				status: 'Development',
				assignedTo: {
					foto: './img/listProject/photo1.png',
					title: 'Dominic Lynton',
				},
				assignedToSubTitle: 'Front End Dev',
			},
		],
	};
	render() {
		return this.props.listProject ? (
			<div className="ListProject">
				<ul className="ListProject__title">
					<li style={{marginRight: 87}}>Project title</li>
					<li style={{marginRight: 95}}>Value</li>
					<li style={{marginRight: 84}}>Deadline</li>
					<li style={{marginRight: 140}}>Time spent</li>
					<li style={{marginRight: 180}}>Progress</li>
					<li style={{marginRight: 150}}>Status</li>
					<li style={{marginRight: 100}}>Assigned to</li>
				</ul>
				{this.state.listProject.map((el, index) => {
					return (
						<ListItem
							key={index}
							mainTitle={el.mainTitle}
							subtitle={el.subtitle}
							value={el.value}
							deadlineMainTitle={el.deadline.mainTitle}
							deadlineSubtitle={el.deadline.subtitle}
							timeSpent={el.timeSpent}
							progress={el.progress}
							status={el.status}
							assignedToFoto={el.assignedTo.foto}
							assignedToTitle={el.assignedTo.title}
							assignedToSubTitle={el.assignedToSubTitle}
						/>
					);
				})}
			</div>
		) : null;
	}
}
