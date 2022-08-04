import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1}/>
      <Part part = {props.part2} exercises = {props.exercises2}/>
      <Part part = {props.part3} exercises = {props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header props = {props.course.name}/>
      <Content part1 = {props.parts[0].name} exercises1 = {props.parts[0].exercises} part2 = {props.parts[1].name} exercises2 = {props.parts[1].exercises} part3 = {props.parts[2].name} exercises3 = {props.parts[2].exercises}/>
      <Total ex1 = {props.parts[0].exercises} ex2 = {props.parts[1].exercises} ex3 = {props.parts[2].exercises}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App