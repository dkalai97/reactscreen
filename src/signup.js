import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

class signup extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "", type: "password" };
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangepassword = (e) => {
    this.setState({ password: e.target.value });
  };
  showpassword = (e) => {
    if (this.state.type === "password") {
      this.setState({ type: "text" });
    } else {
      this.setState({ type: "password" });
    }
  };

  render() {
    return (
      <div className="col-lg-4 col-md-8 login-form mx-lg-auto mx-md-auto">
        <img src="OCC1 1.png" />
        <h2>Welcome Back,</h2>

        <form>
          <div className="d-lg-flex d-md-flex flex-lg-column flex-md-column align-items-lg-center align-items-md-center">
            <div className="form-group col-lg-10 col-md-10">
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-group col-lg-10 col-md-10">
              <input
                type={this.state.type}
                value={this.state.password}
                onChange={this.handleChangepassword}
                required
              />
              <label>Password</label>
              <i
                class="fa fa-eye"
                aria-hidden="true"
                id="togglePassword"
                onClick={this.showpassword}
              ></i>
            </div>
            <a href="#" className="col-lg-10 col-md-10 forgetpsd">
              Forget Password?
            </a>
            <div className="row">
              <span className="wide-circle"></span>
              <span className="circle"></span>
            </div>
            <input
              type="submit"
              className="form-control-lg col-lg-6 submit-btn"
              value="Login"
            />
            <div className="account-details">
              <span>Don't have an account</span>
              <a href="#">Signup</a>
              <a href="javascript:;">Forget login</a>
            </div>
            <div className="d-flex">
              <hr />
              <span className="line-space">
                <hr />
              </span>
            </div>
            <div className="sign-up">
              <span>signin Using:</span>
              <GoogleLogin
                clientId="998149793217-9dgfrcq78h2dt5nk792sakl4vcj1h36e.apps.googleusercontent.com"
                buttonText=""
                cookiePolicy={"single_host_origin"}
              />
              ,
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default signup;
