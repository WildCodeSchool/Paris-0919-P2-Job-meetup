import React from 'react'
import logo from '../../img/logo-blancjaune.svg'
import './ProfilPicture.css'
import avatar from '../../img/avatar.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

const mapStateToProps = (state) => {
    return state
  }

class ProfilPicture extends React.Component {

    state = {
        intervalIsSet: false,
        userChecked : false,
        file: '',
        imagePreviewUrl: ''
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }

    putDataToDB = () => {
        axios.post('http://localhost:4000/api/user/signup', {
            name : this.props.LoginUser.name,
            firstName : this.props.LoginUser.firstName,
            mail : this.props.LoginUser.mail,
            password : this.props.LoginUser.password,
            type : this.props.LoginUser.type,
            spec : this.props.LoginUser.spec,
            languages : this.props.LoginUser.languages,
            interest : this.props.LoginUser.interest,
            text : this.props.LoginUser.text,
        })
        .then(res => {
            if (res.data === 'SignUp successfull') {
            const action = { type: 'LOG', value: this.props.LoginUser.mail,}
            this.props.dispatch(action)
            this.redirect()
        }})
      };

      redirect =()=>{
        this.props.history.push('/Home')
    }

    //FUNCTION FOR DOWNLOADING PICTURE__>

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   this.setState({file: e.target.files[0]})
    // }

    handleImageChange = (e)=> {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0]

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
    }

    //<__FUNCTION FOR DOWNLOADING PICTURE
    

    render() {

      // IMAGE DOWNLOAD__>
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      }
      // <__IMAGE DOWNLOAD

        return(
            <div className="containerUserProfil">
                <Link to ="/"><img src={logo} alt="logo Skills" className="logoUserProfil"></img></Link> 
                <div>
                    <p className="inscriptionUserChoice">Photo de profil</p>
                </div>
                <div className="containerChoice">
                    {/* <img src={avatar} className="avatar" alt="" /> */}
                    <div className='avatar'>{$imagePreview}</div>
                </div>
                
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleImageChange} />
                    {/* <button type="submit" onClick={this.handleSubmit}>Upload Image</button> */}
                  </form>
                  
                </div>

                <footer className="linearBalls"> 
                    <div className="links">
                        <Link to='/ProfilDescription'><p>Précédent</p> </Link>
                        <input type="button" className="Validate_SignUp" onClick = {() => this.putDataToDB()} to='/ProfilPicture' value="VALIDER"/>
                    </div>
                </footer>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProfilPicture)