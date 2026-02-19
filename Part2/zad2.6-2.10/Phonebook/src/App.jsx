import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName
  }
  const exists = persons.some(person => person.name === newName)
  if (exists) {
    alert(`ERROR: ${newName} exists`)
  } else {
    setPersons(persons.concat(personObject))
    alert(`${newName} is already added to the phonebook`)
  }
  setNewName('')
}


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNoteChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Persons</h2>
      {persons.map(p => <div key={p.name}>{p.name}</div>)}
    </div>
  )
}

export default App
