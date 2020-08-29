import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import './App.css'
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/users" exact>Users</NavLink>
                </li>
                <li>
                  <NavLink to="/courses" exact>Courses</NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/course/:id" component={Course} />
            <Redirect from="/all-courses" to="/courses"/>
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
