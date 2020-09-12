import React, { Component } from 'react';
import About from "../about/about";
import Word from "../word/word";
import Resume from "../resume/resume";
import Contact from "../contact/contact";
import './show.css';
import { Switch, Route } from "react-router-dom";


class Show extends Component {
    render() {
        return <div className="show">
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/word">
                    <Word />
                </Route>
                <Route path="/">
                    <About />
                </Route>
                
            </Switch>
        </div>
    }
}

export default Show