import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDevSpec.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }

class ProfilLanguages extends React.Component {

    state = {
        languages : []
    }

    _userInfo(){
        const action = {type : 'USER_LANG', value : this.state}
        this.props.dispatch(action)
      }
    
    handleClick = (name) => {
        const lang = this.state.languages
        const index = lang.indexOf(name)

        if (index === -1){
            lang.push(name)
        }
        else {
            lang.splice(index, 1)
        }
        this.setState({languages : lang})

    }

    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    
                    <p className="inscriptionUserChoice">Vos langages</p>
                </div>

                <div className="containerChoicel4">
                    <form className="form">
                        <p> <button onClick={() => this.handleClick("JS")} type="button" id="userFront-button">JS</button> </p>
                        <p> <button onClick={() => this.handleClick("HTML")} type="button" id="userBack-button">HTML</button> </p>
                        <p> <button onClick={() => this.handleClick("CSS")} type="button" id="userFullStack-button">CSS</button> </p>
                    </form>
                </div>
                
                <footer className="linearBalls"> 

                
                {/* <p> <button type="button" id="userFullStack-button">Soumettre</button> </p> */}
                <div className="links">
                <Link to ="ProfilDevSpec"> <p>Précédent</p>   </Link>     
                <Link onClick = {() => this._userInfo()} to ="ProfilInterests"><p>Suivant</p>  </Link>
                </div>

                </footer>
                


            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilLanguages)