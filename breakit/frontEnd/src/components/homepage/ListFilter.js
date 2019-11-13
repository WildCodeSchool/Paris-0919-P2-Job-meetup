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

	earth_radius = 6378137
	lat1 = this.state.lat
	lng1 = this.state.lng
	lat2 = this.state.lat2
	lng2 = this.state.lng2
	rlo1 = this.deg2rad(this.lng1)
	rla1 = this.deg2rad(this.lat1)
	rlo2 = this.deg2rad(this.lng2);
	rla2 = this.deg2rad(this.lat2);
	dlo = (this.rlo2 - this.rlo1) / 2;
	dla = (this.rla2 - this.rla1) / 2;
	a = (Math.sin(this.dla) * Math.sin(this.dla)) + Math.cos(this.rla1) * Math.cos(this.rla2) * (Math.sin(this.dlo) * Math.sin(this.dlo))
	d = 0.002 * Math.atan2(Math.sqrt(this.a), Math.sqrt(1 - this.a));


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
			<div className="ListFilter_container_1">
				{this.props.toggleFilter.isFiltered ?

					<div className="ListFilter_container_2">
						<div className="list">
							<ul className = "list_meetup_around">
								{this.props.toggleList.meetups.map((marker2, i) => {
									return (

										<div key={i}>
											<li  className = "list_meetup_around_map">{marker2.fields.title} - {this.distanceComptuting(marker2.geometry.coordinates[0], marker2.geometry.coordinates[1])} km</li>
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
