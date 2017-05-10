import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import HomePage from './app/home/HomePage';
import AboutPage from './app/about/AboutPage';
import CoursePage from './app/course/components/CoursePage';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="courses" component={ CoursePage } />
        <Route path="about" component={ AboutPage } />
    </Route>
);
