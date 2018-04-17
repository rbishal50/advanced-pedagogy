import React, { Component, Fragment } from 'react';
import './Dashboard.css';
import UserDetails from '../../components/Dashboard/UserDetails/UserDetails';
import SubjectReport from '../../components/Dashboard/SubjectReport/SubjectReport';
import ActivityLog from '../../components/Dashboard/ActivityLog/ActivityLog';

class Dashboard extends Component {
	state = {

	};

	render () {
		return (
			<Fragment>
				<div className="container-fluid">
					<div class="row">

						<div className="col-md-6">
								<UserDetails />
						</div>

						<div className="col-md-6">
								<SubjectReport />
						</div>

						<div className="col-md-12">
							<ActivityLog />
						</div>

					</div>
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;