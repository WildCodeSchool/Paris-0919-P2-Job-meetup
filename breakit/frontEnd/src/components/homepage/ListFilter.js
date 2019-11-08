import React from 'react';
import { connect } from 'react-redux';
import './ListFilter.css';
import SimpleExample from './SimpleExample';

const mapStateToProps = (state) => {
	return state
}

class listFilter extends React.Component {
	state = {
		lat: 48.849044,
		lng: 2.352831,
	}
	deg2rad = (x) => {
		return Math.PI * x / 180
	}

	order(a, b) {
		return a < b ? -1 : (a > b ? 1 : 0);
	}
	  

	distanceComptuting = (lng, lat) => {
		const earth_radius = 6378137
		const lat1 = this.state.lat
		const lng1 = this.state.lng
		const rlo1 = this.deg2rad(lng1)
		const rla1 = this.deg2rad(lat1)
		const rlo2 = this.deg2rad(lng);
		const rla2 = this.deg2rad(lat);
		const dlo = (rlo2 - rlo1) / 2;
		const dla = (rla2 - rla1) / 2;
		const a = (Math.sin(dla) * Math.sin(dla)) + Math.cos(rla1) * Math.cos(rla2) * (Math.sin(dlo) * Math.sin(dlo))
		const d = 0.002 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return Math.round(earth_radius * d * 100) / 100
	}

	render() {
		return (
			<div className="first_container">
				{this.props.toggleFilter.isFiltered ?
					<div className="second_container">
						<div className="list">
							<ul>
								{this.props.toggleList.meetups.map(marker2 => {
									return (
										<div>
											<li>{marker2.fields.title} - {this.distanceComptuting(marker2.geometry.coordinates[0], marker2.geometry.coordinates[1])} km</li>
										</div>
									)
								}
								)} 
							</ul>
						</div>
					</div>
					: null}
			</div>
		)
	}
}

export default connect(mapStateToProps)(listFilter)

