import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = (props) => {
  const { text, value} = props
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100 + " %"

  if (total === 0) {
    return(
      <div>no feedback given</div>
    )
  }

  return(
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
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