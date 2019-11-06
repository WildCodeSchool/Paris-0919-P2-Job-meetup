import React from 'react';
import { connect } from 'react-redux';
import './ListFilter.css';

const mapStateToProps = (state) => {
	return state
}

class listFilter extends React.Component {
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
											<li>{marker2.fields.title}</li>


										</div>
									)
								})
								}
							</ul>
						</div>
					</div>
					: null}
			</div>
		)
	}
}

export default connect(mapStateToProps)(listFilter)