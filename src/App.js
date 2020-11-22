import React, {Suspense} from 'react';
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home"
import UserProfile from "./components/user_page/userProfile";
import passwords from "./components/passwords/passwords";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

    return (
        <div className="Wrapper">
            <Header/>
            <div className="wrapper_content">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/user" component={UserProfile}/>
                        <Route exact path="/passwords" component={passwords}/>
                    </Switch>
                </Suspense>
            </div>


            <Footer/>
        </div>
    );
}

export default App;