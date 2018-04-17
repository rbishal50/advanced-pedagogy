import React from 'react';
import './UserDetails.css';

const UserDetails = (props) => (
	<div className="media">
		<h2 className="welcome-text">Welcome back, Kimmi</h2>
		<div className="media-left" style={{paddingRight: '50px'}}>
			<a href="">
				<img className="media-object img-circle" src="http://via.placeholder.com/110x110" alt="..." />
			</a>
			<div className="balance">
				<h3>1202</h3>
				<p>Total Balance</p>
			</div>
			<a href="" className="credit-button">Add Credit</a>
		</div>
		<div className="media-body">
			<h4 className="media-heading user-name">Kim Jensen</h4>
			<ul className="user-details">
				<li>Kathmandu, Nepal</li>
				<li>test@gmail.com</li>
				<li>Sierra Academy of Business Science Administration</li>
			</ul>
			<ul className="categories">
				<li><a href="">Student</a></li>
				<li><a href="">Student</a></li>
				<li><a href="">Student</a></li>
			</ul>
		</div>
	</div>
);

export default UserDetails;