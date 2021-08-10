import React, { Component } from "react";
import Modal from "react-modal";
import "./LoginSignup.scss";
import axios from "axios";

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fetchedUsername: "",
      password: "",
      fetchedPassword: "",
      password2: "",
      mobile: "",
      email: "",
      address: "",
      needSpecialCare: false,
      showLogin: true,
      loginSuccess: false,
      // statusMsg: ''
      modalStyles: {
        content: {
          borderRadius: "25px",
          width: "37%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        },
      },
    };
    this.togglePage = this.togglePage.bind(this);
    this.authLogin = this.authLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMobile = this.handleChangeMobile.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePassword2 = this.handleChangePassword2.bind(this);
    this.handleChangeNeedSpecialCare = this.handleChangeNeedSpecialCare.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement("#root");
    this.hideModal();
  }

  togglePage() {
    const { showLogin } = this.state;
    this.setState({
      showLogin: !showLogin,
    });
  }

  authLogin = e => {
    e.preventDefault();
    const { username, password, fetchedUsername, fetchedPassword } = this.state;

    var url = "http://localhost:9003/api/users/username/" + username;

    console.log(url);
    
    axios
      .get(url)
      .then(function (response) {
        this.setState({ fetchedPassword: response.data.password });
        this.setState({ fetchedUsername: response.data.username });
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });

    if (fetchedPassword === password && fetchedUsername === username) {
      this.hideModal();
    } else if (fetchedPassword !== password && fetchedUsername === username) {
    //   //   statusMsg = "LOGIN failed. Incorrect password. Please try again.";
    } else if (fetchedUsername !== username) {
    //   //   statusMsg =
    //   // "LOGIN failed. Username does not exist. Please sign up instead.";
    } else {
    //   //   statusMsg = "LOGIN failed, unsure why. Please contact admin @98001234";
    }
  };

  submitSignup = e => {
    e.preventDefault();

    const {
      username,
      password,
      email,
      address,
      mobile,
      // needSpecialCare,
      //   statusMsg,
      password2,
    } = this.state;

    if (password === password2) {
      var body = {
        username: username,
        password: password,
        address: address,
        email: email,
        mobile: mobile,
        // needSpecialCare: needSpecialCare,
      };
      axios({
        method: "post",
        url: "http://localhost:9003/api/users",
        headers: { "Content-Type": "application/json"},
        data: body,
      })
        .then(function (response) {
          console.log("Submitted: " + response);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });

      this.hideModal();
    } else if (password !== password2) {
      //   statusMsg = "Passwords do not match. Please try again.";
    }
  };

  hideModal() {
    document
      .getElementsByClassName("ReactModalPortal")[0]
      .classList
      .add("d-none");
  }

  handleChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleChangePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };
  handleChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangeMobile = (e) => {
    this.setState({ mobile: e.target.value });
  };  
  
  handleChangeNeedSpecialCare = (e) => {
    const { needSpecialCare } = this.state;
    this.setState({
      needSpecialCare: !needSpecialCare,
    });
  };

  render() {
    const {
      showLogin,
      modalStyles,
      username,
      password,
      mobile,
      email,
      address,
      needSpecialCare,
      password2,
      //   statusMsg,
    } = this.state;

    //Log In Model
    if (showLogin) {
      return (
        <Modal isOpen="true" style={modalStyles}>
          <div className="container">
            <div className="row">
              <h2>Log In</h2>
              <hr />
              <form>
                <label for="username">Username: </label>
                <input
                  type="text"
                  id="username"
                  onChange={this.handleChangeUsername}
                  value={username}
                />{" "}
                <br />
                <label for="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChangePassword}
                  value={password}
                />{" "}
                <br />
                <button
                  className="btn btn-round btn-info"
                  onClick={this.authLogin}
                >
                  Log In
                </button>{" "}
                <br />
                <a>Forgot Password?</a>
              </form>
              <hr />
              {/* <p className="status-msg">{statusMsg}</p> */}
              <p>New user?
              <br />
              <button
                className="btn btn-round btn-info login-signup"
                onClick={this.togglePage}
              >
                Sign up
              </button>
              </p>
            </div>
          </div>
        </Modal>
      );

      //Sign Up Model
    } else if (!showLogin) {
      return (
        <Modal isOpen="true" style={modalStyles}>
          <div className="container">
            <div className="row">
              <h2>Sign up</h2>
              <hr />
              <form>
                <label for="userId">Username: </label>
                <input
                  type="text"
                  id="userId"
                  onChange={this.handleChangeUsername}
                  value={username}
                />{" "}
                <br />
                <label for="pw">Password: </label>
                <input
                  type="password"
                  id="pw"
                  onChange={this.handleChangePassword}
                  value={password}
                />{" "}
                <br />
                <label for="pw">Retype Password: </label>
                <input
                  type="password"
                  id="pw"
                  onChange={this.handleChangePassword2}
                  value={password2}
                />{" "}
                <br />
                <label for="mobile">Mobile: </label>
                <input
                  type="tel"
                  id="mobile"
                  onChange={this.handleChangeMobile}
                  value={mobile}
                />{" "}
                <br />
                <label for="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChangeEmail}
                  value={email}
                />{" "}
                <br />
                <label for="address">Address: </label>
                <input
                  type="text"
                  id="address"
                  onChange={this.handleChangeAddress}
                  value={address}
                />{" "}
                <br />
                <p className="d-inline-block">
                  Do you require special assistance?{" "}
                </p>
                <label className="switch">
                  <input
                    type="checkbox"
                    className="vamsey"
                    value={needSpecialCare}
                    onChange={this.handleChangeNeedSpecialCare}
                  />
                  <span className="slider round"></span>
                </label>
                <br/>
                <button
                  className="btn btn-round btn-info mb-4"
                  onClick={this.submitSignup}
                >
                  Sign up
                </button>{" "}
                <br />
              </form>
              <hr />
              <p className="d-flex m-left-5">
                <span>Have an account already?</span>
                <button
                  className="btn btn-round btn-info signup-login"
                  onClick={this.togglePage}
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </Modal>
      );
    }
  }
}
