const Persons = ({ persons, filter }) => {
  const personsToShow = persons.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>{personsToShow.map(({ name, number }) => <div key={name}>{name} {number}</div>)}</>
  )
}

export default Persons
