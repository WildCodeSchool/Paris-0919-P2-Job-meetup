import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDevSpec.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }

class ProfilDevSpec extends React.Component {

    state = {
        spec : []
    }

    _userInfo(){
        const action = {type : 'USER_SPEC', value : this.state}
        this.props.dispatch(action)
      }

    handleClick = (name) => {
        const spec = this.state.spec
        const index = spec.indexOf(name)

        if (index === -1){
            spec.push(name)
        }
        else {
            spec.splice(index, 1)
        }
        this.setState({spec : spec})

    }

    render() {
        return(
            <div className="containerUserProfil">
                <Link exact to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    
                    <p className="inscriptionUserChoice">Votre specialité</p>
                </div>

                <div className="containerChoiceSpec2">
                    <form className="form">
                        <p> <button className="Spec_button" onClick={() => this.handleClick("Front-end")} name="Front-end" type="button" id="userFront-button">Front-end</button> </p>
                        <p> <button className="Spec_button" onClick={() => this.handleClick("Back-end")} name="Back-end" type="button" id="userBack-button">Back-end</button> </p>
                        <p> <button className="Spec_button" onClick={() => this.handleClick("Fullstack")} name="Fullstack" type="button" id="userFullStack-button">Fullstack</button> </p>
                    </form>
                </div>

                <footer className="linearBalls"> 
                
                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <Link to ="/ProfilUserChoice"><p>Précédent</p>   </Link>     
                <Link onClick = {() => this._userInfo()} to ="/SearchLanguages"><p>Suivant</p>  </Link>
                </div>
                
                </footer>
                


            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilDevSpec)