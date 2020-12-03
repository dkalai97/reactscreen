import React from 'react';

class signup extends React.Component {
    constructor() {
        super();
        this.state = { email: '', password: '' , type:'password' };
      }
      handleChange = (e) => {
        this.setState({ email: e.target.value });
      };
      handleChangepassword = (e) => {
        this.setState({ password: e.target.value });
      }
      showpassword = (e) => {
          if(this.state.type==="password"){
            this.setState({type: "text"});
          }
          else{
            this.setState({type: "password"});
          }
      }
    render() {
      return (
          
    <div className="col-lg-4 col-md-8 login-form mx-lg-auto mx-md-auto">
        <img src="OCC1 1.png" />
        <h2>Welcome Back</h2>
        <form>
            <div className="d-lg-flex d-md-flex flex-lg-column flex-md-column align-items-lg-center align-items-md-center">
                <div className="form-group col-lg-10 col-md-10">
                <input type="text" value={this.state.email} onChange={this.handleChange} />
                    <label>Email</label>
                </div>
                <div className="form-group col-lg-10 col-md-10">
                    <input type={this.state.type} value={this.state.password} onChange={this.handleChangepassword} />
                    <label>Password</label>
                    <i class="fa fa-eye" aria-hidden="true" id="togglePassword" onClick={this.showpassword}></i>
                </div>
                <a href="#" className="col-lg-10 col-md-10 forgetpsd">Forget Password?</a>
                <div className="row">
                    <span className="wide-circle"></span>
                    <span className="circle"></span>
                </div>
                <input type="submit" className="form-control-lg col-lg-6 submit-btn" value="Login"/>
                <div className="account-details">
                    <span>Don't have an account</span>
                    <a href="#">Signup</a>
                </div>
                <div className="d-flex">
                    <hr/>
                    <span className="line-space"><hr/></span>
                </div>
                <div className="sign-up">
                    <span>Login Using:</span>
                    <span className="icons-facebook">
                        <img src="facebook.png"/>
                    </span>
                    <span className="icons-google">
                        <img src="google.png"/>
                    </span>
                </div>
            </div>
        </form>
    </div>

            

      )
     
    }
  }

export default signup;