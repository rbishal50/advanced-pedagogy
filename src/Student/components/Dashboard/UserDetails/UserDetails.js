import React from 'react';
import './UserDetails.css';

const UserDetails = (props) => (
	<div className="media">
		<h2 className="welcome-text">Welcome back, { props.firstName }</h2>
		
		<div className="media-left" style={{paddingRight: '50px'}}>
			<a href="">
				<img className="media-object img-circle" src={props.profileImage	} alt="..." />
			</a>
			
			<div className="balance">
				<h3>{ props.totalBalance }</h3>
				<p>Total Balance</p>
			</div>

			<a href="" className="credit-button">Add Credit</a>
		</div>

		<div className="media-body">
			<h4 className="media-heading user-name">{ props.firstName } { props.lastName }</h4>
			
			<ul className="user-details">
				<li>{ props.city }, { props.country }</li>
				<li>{ props.email }</li>
				<li>{ props.college }</li>
			</ul>

			<ul className="categories">
				{props.tags.map(tag => <li key={tag}><a href="">{tag}</a></li>)}
			</ul>

		</div>

	</div>
);

export default UserDetails;