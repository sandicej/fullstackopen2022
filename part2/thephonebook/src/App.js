import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [nameFilter, setNameFilter] = useState('')
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(({ data }) => setPersons(data))
  }, [])

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