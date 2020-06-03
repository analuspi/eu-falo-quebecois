import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Lesson.css"
import { LessonConsumer } from '../../../context'

export default class Lesson extends Component {
    render() {
        const {id, title, img} = this.props.lesson;
        return (
            <div className="lesson-card">
                <h3>Lesson</h3>
            </div>
        )
    }
}
