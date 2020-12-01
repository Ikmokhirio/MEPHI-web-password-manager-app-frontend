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

        this.updateUserData = this.updateUserData.bind(this)

        this.state = {
            username: "", // Current user data
            role: "",
            email: ""
        }
    }

    componentDidMount() {
        this.updateUserData() // Update user data if we have been logged already
    }

    updateUserData() {
        console.log("UPDATING USER DATA")

        fetch('/api/user', {
            method: "get",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            res.json().then(data => {
                this.setState({
                    email: data.email,
                    username: data.username,
                    role: data.role
                })

            })
        }).catch(e => {
            console.error((e))
        })
    }

    render() {
        return (<div className="Wrapper">
            <Header/>
            <div className="wrapper_content">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route exact path="/login"
                               render={(props) => (<Login {...props} onUpdate={this.updateUserData}/>
                               )}/>

                        <Route exact path="/register"
                               render={(props) => (<Register {...props} onUpdate={this.updateUserData}/>
                               )}/>

                        <Route exact path="/user"
                               render={(props) => (
                                   <UserProfile {...props} user={this.state}/>
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