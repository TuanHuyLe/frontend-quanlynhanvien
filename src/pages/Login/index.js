import { ActionPictureInPictureAlt } from 'material-ui/svg-icons'
import React from 'react'
import { withRouter } from 'react-router-dom'

import '../../assets/login/images/icons/favicon.ico'
import '../../assets/login/vendor/bootstrap/css/bootstrap.min.css'
import '../../assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../assets/login/fonts/iconic/css/material-design-iconic-font.min.css'
import '../../assets/login/vendor/animate/animate.css'
import '../../assets/login/vendor/css-hamburgers/hamburgers.min.css'
import '../../assets/login/vendor/animsition/css/animsition.min.css'
import '../../assets/login/vendor/select2/select2.min.css'
import '../../assets/login/vendor/daterangepicker/daterangepicker.css'
import '../../assets/login/css/util.css'
import '../../assets/login/css/main.css'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isValid: true,
            isLoading: false,
            token: ''
        }
    }

    async onClickButtonLogin() {
        await this.setState({
            isLoading: true
        })

        let data = {
            username: this.state.username,
            password: this.state.password
        }
        const url = "http://localhost:9090/api/auth/login";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((respone) => respone.json())
            .then((res) => {
                console.log(res.token)
                this.setState({
                    ...this.state,
                    token: res.token,
                    isLoading: false
                })
            })
            .then(() => {
                if (this.state.token) {
                    localStorage.setItem("token", this.state.token)
                    this.props.history.push('admin');
                } else {
                    this.setState({
                        ...this.state,
                        isValid: false
                    })
                }
            })
            .catch((error) => {

            });
    }

    _renderWhenInvalid() {
        return (
            <>
                <h1>Error</h1>
                <button onClick={() => this.setState({
                    username: '',
                    password: '',
                    isValid: true
                })}>Try Again</button>
            </>
        )
    }

    render() {
        return (
            <>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form method='POST' className="login100-form validate-form">
                                <span className="login100-form-title p-b-26">
                                    Welcome
                                    </span>

                                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                    <input
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={(e) => this.setState({ username: e.target.value })}
                                    />
                                    <span className="focus-input100" />
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter password">
                                    <span className="btn-show-pass">
                                        <i className="zmdi zmdi-eye" />
                                    </span>
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                    <span className="focus-input100" />
                                </div>
                            </form>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn" />
                                    <button className="login100-form-btn" onClick={() => this.onClickButtonLogin()}>
                                        Login
                                    </button>
                                    {
                                        !this.state.isValid ? this._renderWhenInvalid() : null
                                    }
                                </div>
                            </div>
                            <div className="text-center p-t-115">
                                <span className="txt1">
                                    Don’t have an account?
                                        </span>
                                <a className="txt2" href="#">
                                    Sign Up
                                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
// const mapDispatchToProps = dispatch => ({
//     userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
// })

export default withRouter(Login);

