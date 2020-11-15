import React, {Suspense} from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home"

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
                    </Switch>
                </Suspense>
            </div>


            <Footer/>
        </div>
    );
}

export default App;