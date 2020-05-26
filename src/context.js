import React, { Component } from 'react'
import { lessons, detailLesson } from './data'

const LessonContext = React.createContext();

class LessonProvider extends Component {
  state = {
      lessons: lessons,
      detailLesson: detailLesson 
  }
  handleDetail = () => {
    console.log('hello from detail');
  }
 
  
  render() {
    return (
      <LessonContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail
        }}>
          {this.props.children}
      </LessonContext.Provider>
    );
  }
}

const LessonConsumer = LessonContext.Consumer;

export {LessonProvider, LessonConsumer};