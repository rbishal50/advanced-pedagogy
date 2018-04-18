import React, { Component, Fragment } from 'react';
import './Dashboard.css';
import UserDetails from '../../components/Dashboard/UserDetails/UserDetails';
import SubjectReport from '../../components/Dashboard/SubjectReport/SubjectReport';
import ActivityLogs from '../../components/Dashboard/ActivityLogs/ActivityLogs';
import axios from 'axios';

class Dashboard extends Component {
	state = {
		user: {
			id: '',
			firstName: '',
			lastName: '',
			address: {
				city: '',
				country: ''
			},
			email: '',
			college: '',
			tags: [],
			totalBalance: 0,
			profileImage: null,
			activityLogs: []
		}
	};

	componentDidMount() {
		axios.get('http://localhost:3000/users/1')
			.then(response => {
				console.log(response.data);
				this.setState({user: response.data});
			})
			.catch(error => {
				console.log(error);
			})
	}

	render () {
		const { 
			firstName, 
			lastName, 
			email, 
			college, 
			tags, 
			totalBalance, 
			profileImage,
			activityLogs 
		} = this.state.user;

		const { city, country } = this.state.user.address;

		return (
			<Fragment>
				<div className="container-fluid">
					<div className="row">

						<div className="col-md-6">
								<UserDetails 
									firstName={firstName}
									lastName={lastName}
									city={city}
									country={country}
									email={email}
									college={college}
									tags={tags}
									totalBalance={totalBalance}
									profileImage={profileImage}
								/>
						</div>

						<div className="col-md-6">
								<SubjectReport />
						</div>

						<div className="col-md-12">
							<ActivityLogs
								activityLogs={activityLogs}
							/>
						</div>

					</div>
				</div>
			</Fragment>
		);
	}
}

export default Dashboard;