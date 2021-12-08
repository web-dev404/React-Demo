import React from "react";
import {logoutThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import Loader from "../common/loader/Loader";

class HeaderContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.isFetching ? <Loader isFetchng={this.props.isFetching}/> : null}
                <Header {...this.props} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);