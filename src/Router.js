import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Component/Home'
import Main from './Component/Main'


function Routers(props) {
    return (
        <div>
        <Router>
            <Route
            path="/"
            exact
            strict
            component={Home}/>
            <Route
            path="/main"
            exact
            strict
            component={Main}/>
            </Router>
        </div>
    );
}

export default Routers;