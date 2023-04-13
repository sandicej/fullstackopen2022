import { useState } from 'react'
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [nameFilter, setNameFilter] = useState('')
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })

  const handleNameFilterChange = (value) => {
    setNameFilter(value)
  }

  const handlePersonChange = (value) => {
    setNewPerson(value)
  }

  const addPerson = () => {
    const { name: newName, number: newNumber } = newPerson;

    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewPerson({ name: '', number: '' })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
      <h2>add a new</h2>
      <PersonForm
        value={newPerson}
        onChange={handlePersonChange}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={nameFilter}
      />
    </div>
  )
}

export default App