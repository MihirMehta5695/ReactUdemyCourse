import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';
import { Redirect } from 'react-router-dom'
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props)
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                // this.setState({ submitted: true })
                // Using the this.props.history to redirect, helps us to avoid the state management, as we did for conditional redirect
                this.props.history.push('/posts');
            });
    }

    render() {

        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }


        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Mihir">Mihir</option>
                    <option value="Mansi">Mansi</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;