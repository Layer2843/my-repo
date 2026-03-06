const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(p => (
        <div key={p.name}>
          {p.name} {p.number}
          <button onClick={() => deletePerson(p.id)}>Usuń</button>
        </div>
      ))}
    </div>
  )
}

export default Persons
