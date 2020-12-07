import React, {Component, Suspense} from 'react';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home"
import UserProfile from "./components/user_page/userProfile";
import passwords from "./components/passwords/passwords";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="Wrapper">
            <Header/>
            <div className="wrapper_content">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route exact path="/login"
                               render={(props) => (<Login {...props}/>
                               )}/>

                        <Route exact path="/register"
                               render={(props) => (<Register {...props}/>
                               )}/>

                        <Route exact path="/user"
                               render={(props) => (
                                   <UserProfile {...props}/>
                               )}/>

                        <Route exact path="/passwords" component={passwords}/>

                        <Redirect from={'/home'} to={'/'}/>
                        <Redirect from={'/index'} to={'/'}/>
                    </Switch>
                </Suspense>
            </div>


            <Footer/>
        </div>)
    }
}

export default App;