import React from 'react';

export default props =>
	props.massanger ? (
		<div className="inbox">
			<div className="inbox1 box">
				<img src="./img/dashboard/inbox.png" alt="inbox" />
				<span className="inbox__txt">inbox</span>
			</div>
			<div className="inbox1 box">
				<img src="./img/dashboard/inbox.png" alt="inbox" />
				<span className="inbox__txt">inbox</span>
			</div>
			<div className="send box">
				<img src="./img/dashboard/telegram.png" alt="telegram" />
				<span className="inbox__txt">Sent</span>
			</div>
			<div className="tresh box">
				<img src="./img/dashboard/delete.png" alt="delete" />
				<span className="inbox__txt">Trash</span>
			</div>
			<div className="filter_massage"></div>
		</div>
	) : props.listProject ? (
		<div className="inbox ">
			<div className="inbox__listProject">
				<div className="inbox__listProject-left">
					<span>All Projects ({props.amountProject})</span>
					<span>Workflow</span>
				</div>
				<div className="inbox__listProject-rigth">
					<span>Show projects:</span>
					<div>All</div>
				</div>
			</div>
		</div>
	) : (
		<div className="inbox" />
	);
