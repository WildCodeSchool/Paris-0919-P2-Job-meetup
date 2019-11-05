import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilPicture.css'
import avatar from '../../img/avatar.png'
import axios from 'axios'
// import {storage} from '../../../firebase'

class ProfilPicture extends React.Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('image' , this.state.selectedFile, this.state.selectedFile.name)
        axios.post('https://console.firebase.google.com/project/skillsproject-7ac0d/overview')
    }

    render() {
        return(
            <div className="containerUserProfil">
                <img src={logo} alt="logo Skills" className="logoUserProfil"></img>
                <div>
                    <p className="inscriptionUserChoice">Photo de profil</p>
                </div>


                <div className="containerChoice">
                <img src={avatar} className="avatar" />
                </div>

                <div className="uploaderContainerImg">
                <input type="file" onChange={this.fileSelectedHandler} ></input>
                <button onClick={this.fileUploadHandler}>Upload</button>
                </div>



                <footer className="linearBalls"> 
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
                <span className="dot" onclick="currentSlide(4)"></span>
                <span className="dot" onclick="currentSlide(5)"></span>
                <span className="dot" onclick="currentSlide(6)"></span>
                <span className="doty" onclick="currentSlide(1)"></span>         
                </footer>
                
            </div>
        )
    }
}

export default ProfilPicture