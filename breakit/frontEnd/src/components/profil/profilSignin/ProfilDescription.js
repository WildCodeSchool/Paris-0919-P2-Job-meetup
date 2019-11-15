import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilDescription.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return state
  }

class ProfilDescription extends React.Component {

    state = {
        text : null,
    }

    _userInfo(){
        const action = {type : 'USER_DESC', value : this.state}
        this.props.dispatch(action)
      }

    render() {
        return(
            <div className="containerUserProfil">
                <Link to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    <p className="inscriptionUserChoice">Description</p>
                </div>

                <div className="containerChoiceDes">
                    <form className="form">
                        <textarea onChange={(e) => this.setState({ text: e.target.value })} className='textDescription'name='textarea' id="story" rows="7" cols="33" placeholder="Saisissez votre besoin…"
                        ></textarea>
                    </form>

                </div>
                <footer className="linearBalls"> 

                <div className="links">
                    <Link to='/ProfilInterests'><p>Précédent</p></Link>     
                    <Link onClick = {() => this._userInfo()} to='/ProfilPicture'><p>Suivant</p> </Link> 
                </div>
                
                </footer>


            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilDescription)