import React from 'react';
import {Route, Switch} from "react";
import HomePage from "./home/HomePage";
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CoursePage from './courses/CoursesPage';

function App(){
    return (
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/courses" component={CoursePage} />
                <Route component={PageTransitionEvent} />
            </Switch>
        </div>
    )
}

export default App;

