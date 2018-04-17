import React, { Fragment } from 'react';
import './ActivityLog.css';

const ActivityLog = (props) => (
	<Fragment>
		<h2 className="primary-title">Activity Log</h2>
		<div className="content-block">
			<h3 className="secondary-title">today</h3>
			<div className="table-responsive activity-table">
				<table class="table table-striped">
					<tbody>
						<tr>
							<td>
							<div className="media-left">
								<a href="">
									<img className="media-object img-circle" src="http://via.placeholder.com/42x42" alt="..." />
								</a>
								</div>
								<div className="media-body">
									<h4 className="media-heading title">Introduction to Thermodynamics</h4>
									<p>IGSE Phusics</p>
								</div>
							</td>
							<td>
								<p>Last viewed on <strong>April 20, 2018</strong></p>
							</td>
							<td>
							<div class="progress">
								<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
								aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
									60%
								</div>
							</div>
							</td>
						</tr>
						<tr>
							<td>
							<div className="media-left">
								<a href="">
									<img className="media-object img-circle" src="http://via.placeholder.com/42x42" alt="..." />
								</a>
								</div>
								<div className="media-body">
									<h4 className="media-heading title">Introduction to Thermodynamics</h4>
									<p>IGSE Phusics</p>
								</div>
							</td>
							<td>
								<p>Last viewed on <strong>April 20, 2018</strong></p>
							</td>
							<td>
							<div class="progress">
								<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
								aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
									60%
								</div>
							</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Fragment>
);

export default ActivityLog;