import React, { useState } from 'react'

const Largest = (props) => {
  var max = props.points[0]
  var id = 0
  console.log(props.points.length)
  for (var i = 1; i < props.points.length; i++) {
    if (props.points[i] > max) {
      max = props.points[i]
      id = i
    }
  }

  if (max === 0) {
    return (
      <div>
        No anecdote has gained votes yet
      </div>
    )
  }

  return (
    <div>
      <div>{props.anecdotes[id]}</div>
      <div>has {max} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  const copy = [...points]

  console.log({selected})
  console.log('Taulukko: ', points)

  const handlePoints = () => {
    copy[selected] += 1
    console.log('Taulukko (copy): ', copy)
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={handlePoints}>
          vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 7))}>
          next anecdote
      </button>
      <h1>Anecdote with the most votes</h1>

      <Largest points = {points} anecdotes = {anecdotes}/>
    </div>
  )
}

export default App