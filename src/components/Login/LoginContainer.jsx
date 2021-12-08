import {connect} from "react-redux";
import React from 'react';
import Login from "./Login";
import {required} from "../../utils/validators/validators";
import {loginThunk} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    onSubmit = (formData) => {
        this.props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }

    render() {
        return (
            <Login required={required} onSubmit={this.onSubmit} isAuth={this.props.isAuth} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunk})(LoginContainer);