import React, { Component } from "react";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      valid_email: "",
      message_email: "",
      password: "",
      valid_password: "",
      message_password: "",
      repassword: "",
      fullname: "",
      phone: "",
      address: "",
      gender: "",
    };
  }

  handleChangeInput = (e) => {
    this.setState((prevState) => {
      prevState[e.target.name] = e.target.value;
      return prevState;
    });
  };

  handleCheckInput = (e) => {
    if (e.target.name === "email") {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (re.test(e.target.value)) {
        this.setState((prevState) => {
          prevState.valid_email = true;
          prevState.message_email = "";
          return prevState;
        });
      } else {
        this.setState((prevState) => {
          prevState.valid_email = false;
          prevState.message_email = "Email is invalid";
          return prevState;
        });
      }
    }

    if (e.target.name === "password") {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (re.test(e.target.value)) {
        this.setState((prevState) => {
          prevState.valid_password = true;
          prevState.message_password = "";
          return prevState;
        });
      } else {
        this.setState((prevState) => {
          prevState.valid_password = false;
          prevState.message_password =
            "password must have at least 8 character";
          return prevState;
        });
      }
    }
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.valid_email && this.state.valid_password) {
      //toàn bộ rule check hợp lệ
      //console.log('sẽ gửi form');
      alert("Tài khoản đã được tạo. Vui lòng kiểm tra email");
    } else {
      //console.log('Form chưa đc gửi vì phải hợp lệ toàn bộ các tiêu chí');
      alert("Form chưa được gửi vì phải hợp lệ toàn bộ các tiêu chí");

      if (this.state.valid_email) {
        //do nothing
      } else {
        this.setState((prevState) => {
          prevState.valid_email = false;
          prevState.message_email = "this field is required";
          return prevState;
        });
      }

      if (this.state.valid_password) {
        //do nothing
      } else {
        this.setState((prevState) => {
          prevState.valid_password = false;
          prevState.message_password = "this field is required";
          return prevState;
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <form
          className="form-horizontal"
          role={"form"}
          onSubmit={this.handleSubmitForm}
        >
          <div className="form-group">
            <div className="col">
              <legend>Register Form</legend>
              <br></br>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Email (*)</div>
              <div className="col-sm-10">
                <input
                  onKeyUp={this.handleCheckInput}
                  onChange={this.handleChangeInput}
                  value={this.state.email}
                  type={"text"}
                  name="email"
                  id="email"
                  className={"form-control" + this.state.valid_email}
                />
                <div className="error_hint">{this.state.message_email}</div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Password (*)</div>
              <div className="col-sm-10">
                <input
                  onKeyUp={this.handleCheckInput}
                  onChange={this.handleChangeInput}
                  value={this.state.password}
                  type={"password"}
                  name="password"
                  id="password"
                  className={"form-control" + this.state.valid_password}
                />
                <div className="error_hint">{this.state.message_password}</div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Re-password (*)</div>
              <div className="col-sm-10">
                <input
                  onChange={this.handleChangeInput}
                  value={this.state.repassword}
                  type={"password"}
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Full name (*)</div>
              <div className="col-sm-10">
                <input
                  onChange={this.handleChangeInput}
                  value={this.state.fullname}
                  type={"text"}
                  name="fullname"
                  id="fullname"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Phone (*)</div>
              <div className="col-sm-10">
                <input
                  onChange={this.handleChangeInput}
                  value={this.state.phone}
                  type={"text"}
                  name="phone"
                  id="phone"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Address (*)</div>
              <div className="col-sm-10">
                <input
                  onChange={this.handleChangeInput}
                  value={this.state.address}
                  type={"text"}
                  name="address"
                  id="address"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">Gender (*)</div>
              <div className="col-sm-10">
                <select
                  name="gender"
                  id="gender"
                  onChange={this.handleChangeInput}
                  value={this.state.gender}
                >
                  <option>Male</option>
                  <option>feMale</option>
                  <option>other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
