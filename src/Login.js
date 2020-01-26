import React from 'react';
import './Login.scss'
import Loader from 'react-loader-spinner'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wrong: false,
      isLoading: false,
    };
  }

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') { 
      if(e.target.value.toLowerCase() !== "benfica" &&
      e.target.value.toLowerCase() !== "slb" &&
      e.target.value.toLowerCase() !== "slbenfica" &&
      e.target.value.toLowerCase() !== "sport lisboa e benfica"
      ) {
        this.setState({isLoading: true})
        this.sleep(500).then(() => {

          this.setState({wrong: true})
          this.setState({isLoading: false})
        })
        
      }
      else{
        this.setState({isLoading: true})
        this.sleep(1000).then(() => {

          this.props.parentCallback(true);
          this.setState({isLoading: false})
        })
        
      }
    }
  }

  render() {
    return (
      <div className="text-center login">
      <div className="w-100 h-100 position-fixed login-bg">
      </div>
      {!this.state.isLoading &&
      <span>
      <img src="https://media-exp2.licdn.com/dms/image/C5603AQFUgLh7XISbgw/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=f8x4I2h5PeeS9gjNGgDGGPwil2TscBTH3WdZYq8dOlE" className="profile-pic"></img>
      <h5><div className="mt-3 text-white">Guilherme Branco</div></h5>
      <input type="password" 
      className="password-input pl-2 mt-4" 
      placeholder="Enter password"
      onKeyDown={this._handleKeyDown}
      ></input>
      {this.state.wrong && 
      <div class="mt-2 text-danger" role="alert">
        Ahah. Really? Try again.
      </div>
      }
      <div className=" text-white hint">I'm not a gennie, but I think the password is the best portuguese football club.</div>
      </span>
      }

{this.state.isLoading &&
      <div className="load">

<Loader
         type="TailSpin"
         color="white"
         height={50}
         width={50}
         
      />
      </div>
      }

      </div>
    );
  }
}

export default Login;
