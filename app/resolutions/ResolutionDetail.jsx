import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends Component {
	constructor() {
		super();

		this.state = {
			subscription: {
				resolutions: Meteor.subscribe("userResolutions")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}

	resolution() {
		console.log(Resolutions.findOne(this.props.id));
		return Resolutions.findOne(this.props.id);
	}

	render() {
		let res = this.resolution();
		
		if(!res) {
			return(<div>Loading...</div>);
		}
		return (
			<div>
				<h1>{res.text}</h1>
			</div>
		)
	}
}