import React, {useState} from 'react'

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }


      return (
        <table>
          <tr><td>good {props.good}</td></tr>
          <tr><td>neutral {props.neutral}</td></tr>
          <tr><td>bad {props.bad}</td></tr>
          <tr><td>all {props.good + props.neutral + props.bad}</td></tr>
          <tr><td>average {props.good + props.bad * -1 / (props.good + props.neutral + props.bad)}</td></tr>
          <tr><td>positive {props.good / (props.good + props.neutral + props.bad) * 100} %</td></tr>
        </table>
      )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App