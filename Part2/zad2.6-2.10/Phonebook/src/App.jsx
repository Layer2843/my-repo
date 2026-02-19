import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const exists = persons.some(person => person.name === newName)
    if (exists) {
      alert(`ERROR: ${newName} exists`)
    } else {
      setPersons(persons.concat(personObject))
      alert(`${newName} is already added to the phonebook`)
    }

    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with: 
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Persons</h2>
      {personsToShow.map(p => 
        <div key={p.name}>{p.name} {p.number}</div>
      )}
    </div>
  )
}

export default App
