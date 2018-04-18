import React, { Fragment } from 'react';
import './ActivityLogs.css';
import ActivityLog from './ActivityLog/ActivityLog';

const ActivityLogs = (props) => {
	
	return (
		<Fragment>
			<h2 className="primary-title">Activity Log</h2>
			<div className="content-block">
				<h3 className="secondary-title">today</h3>
				<div className="table-responsive activity-table">
					<table className="table table-striped">
						<tbody>
							{props.activityLogs.map(activityLog => (
								<ActivityLog 
									key={activityLog.title} 
									activityLog={activityLog}/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	);
	
}

export default ActivityLogs;