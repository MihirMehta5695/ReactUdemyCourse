import React, { Component } from 'react';

class Course extends Component {


    render() {
        console.log(this.props)
        let params = ''
        let postId = ''
        let courseTitle = ""
        if (this.props.match) {
            params = this.props.match.params.id.split('?')
            postId = params[0];
            if (params[1]) {
                courseTitle = params[1].split('=')[1]
            }
        }else{
            postId=this.props.id
            courseTitle=this.props.courseTitle
        }


        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID:{postId} </p>
            </div>
        );
    }
}

export default Course;