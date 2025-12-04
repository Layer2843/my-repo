import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  const { good, neutral, bad, plus, zero, minus } = props
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {good + neutral + bad}</p>
      <p>average {(plus + zero + minus) / (good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad)) * 100} %</p>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plus = good * 1
  const zero = neutral * 0
  const minus = bad * -1

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} plus={plus} zero={zero} minus={minus}/>
    </div>
  )
}

export default App