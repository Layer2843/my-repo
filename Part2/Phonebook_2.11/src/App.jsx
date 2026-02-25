import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h1>Persons</h1>
      <ul>
        {persons.map(person =>
          <Persons key={person.id} persons={person} />
        )}
      </ul>
    </div>
  )
}

export default App