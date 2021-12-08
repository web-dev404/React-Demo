import './App.scss';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import React, {Suspense} from "react";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/common/loader/Loader";
import store from "./redux/redux-store";

const Settings = React.lazy(() => import('./components/Settings/Settings'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>

                <SidebarContainer/>

                <div className='app-wrapper-content'>
                    <Suspense fallback={<Loader />}>
                        <Route path="/profile/:userId?">
                            <ProfileContainer />
                        </Route>

                        <Route path="/settings">
                            <Settings />
                        </Route>
                    </Suspense>
                    <Route path="/dialogs">
                        <DialogsContainer/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/music">
                        <Music/>
                    </Route>
                    <Route path="/users">
                        <UsersContainer/>
                    </Route>
                    <Route path="/login">
                        <LoginContainer/>
                    </Route>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = (props) => {
    return (<BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </React.StrictMode>,
        </BrowserRouter>
    )
}

export default SamuraiJSApp;