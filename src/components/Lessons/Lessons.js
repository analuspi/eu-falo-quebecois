import React, { Component } from "react";
import Lesson from "./Lesson/Lesson";
import Title from "../Title/Title";
import { LessonConsumer } from "../../context";
import "./Lessons.css"

export default class Lessons extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="lessons">
            <Title name="Lições" />
            <div className="lesson">
                <LessonConsumer>
                    {value => {
                        return value.lessons.map( lesson => {
                          return <Lesson 
                          key={lesson.id} 
                          lesson={lesson} />
                        })
                    }}
                </LessonConsumer>
            </div>
        
        </div>
      </React.Fragment> 
    );
  }
}
