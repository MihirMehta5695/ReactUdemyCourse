import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent';

// import NewPost from './NewPost/NewPost'

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost')
});
class Blog extends Component {
    state = {
        auth: true
    };


    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        "textDecoration": "underline"
                                    }}
                                >Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                // the to property is always absolute path
                                // for generating relative path, we can use:
                                // pathname: this.props.match.url + '/new-post'
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" exact render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    {/* This is know as guard in React -> using conditonal Routes */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* When using inside the Switch, we can specify the "from" attribute in the Redirect Component
                    When we use the Redirect component outside switch, we cannot use the "from" attribute
                    This type of Redirect is called as unconditional Redirect
                    */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* For 404 not found case, firstly comment out '/' path and write the below code */}
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;