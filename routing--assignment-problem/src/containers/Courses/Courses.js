import React, { Component } from 'react';
import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse: null
    }

    courseClickHandler = (id) => {
        /*this.props.history.push(
                    {
                        pathname: '/course/' + id + "?name=" + this.state.courses[id].title,
                        state: { title: this.state.courses[id].title },
                    }
                ) */
        this.setState({ selectedCourse: id })
    }

    render() {

        let course = null
        if (this.state.selectedCourse) {
            course = (
                <Course
                    id={this.state.selectedCourse}
                    courseTitle={this.state.courses[this.state.selectedCourse-1].title} />
            );
        }

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                                <article
                                    className="Course"
                                    key={course.id}
                                    onClick={() => this.courseClickHandler(course.id)}
                                >{course.title}</article>
                            );
                        })
                    }
                </section>
                {course}
            </div>
        );
    }
}

export default Courses;