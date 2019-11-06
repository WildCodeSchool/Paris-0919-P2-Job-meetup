import React from 'react';
<<<<<<< HEAD
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
=======
import './ListFilter.css';


class listFilter extends React.Component {
    state = {
            isDisplayed: false,
            }

    render() {
        return (
            <div className="first_container">
                <div className="second_container">
                    <div className="list">
                        <ul>
                            <li>Meetup React.js (350m)</li>
                            <li>Blabla JS (500m)</li>
                            <li>Meetup de folie (649m)</li>
                            <li>Sandwich corporation (864m)</li>
                            <li>Choucroute.JS (1432 m)</li>
                            <li>Meetup React.js (350m)</li>
                            <li>Blabla JS (500m)</li>
                            <li>Meetup de folie (649m)</li>
                            <li>Sandwich corporation (864m)</li>
                            <li>Choucroute.JS (1432 m)</li>
                            <li>Meetup React.js (350m)</li>
                            <li>Blabla JS (500m)</li>
                            <li>Meetup de folie (649m)</li>
                            <li>Sandwich corporation (864m)</li>
                            <li>Choucroute.JS (1432 m)</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            )
    }
}

export default listFilter
>>>>>>> origin/profilInscriptionRouter
