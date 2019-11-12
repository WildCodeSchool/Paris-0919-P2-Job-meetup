import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilInterests.css'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }
class ProfilInterests extends React.Component {

    state = {
        interest : []
    }

    handleClick = (name) => {
        const interest = this.state.interest
        const index = interest.indexOf(name)

        if (index === -1){
            interest.push(name)
        }
        else {
            interest.splice(index, 1)
        }
        this.setState({interest : interest})

    }

    _userInfo(){
        const action = {type : 'USER_INT', value : this.state}
        this.props.dispatch(action)
      }
    

    render() {
        return(
            <div className="containerUserProfil">
                <Link exact to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    
                    <p className="inscriptionUserChoice">Centres d'intérêts</p>
                </div>

                <div className="containerChoiceSpec3">
                    <form className="form">
                        <p> <button className="Interest_button" onClick={() => this.handleClick("Meet-Up")} type="button" id="meetup-button">Meet-Up</button> </p>
                        <p> <button className="Interest_button" onClick={() => this.handleClick("Job")} type="button" id="job-button">Job</button> </p>
                        <p> <button  className="Interest_button"onClick={() => this.handleClick("Rencontres pro")} type="button" id="rencontres-button">Rencontres pro</button> </p>
                    </form>
                </div>

                <footer className="linearBalls"> 
                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <Link to ="/SearchLanguages"> <p>Précédent</p>   </Link>     
                <Link onClick = {() => this._userInfo()} to ="/ProfilDescription"><p>Suivant</p>  </Link>
                </div>
                

                </footer>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilInterests)