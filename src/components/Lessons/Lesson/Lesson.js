import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Lesson.css"
import { LessonConsumer } from '../../../context'

export default class Lesson extends Component {
    render() {
        const {id, title, img} = this.props.lesson;
        return (
            <div className="lesson-card" onClick={() => console.log('you clicked on the card')}>
                <Link to="/details">
                    <div className="lesson-img-container">
                        <img src={img} alt="lesson" className="lesson-img"/>
                    </div>
                    <h4 className="lesson-title">{title}</h4>
                </Link>
            </div>
        )
    }
}
