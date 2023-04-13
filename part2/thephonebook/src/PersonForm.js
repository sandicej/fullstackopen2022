const PersonForm = ({
  value,
  onChange,
  onSubmit
}) => {

  const handleNameChange = ({ target }) => {
    onChange({
      ...value,
      name: target.value
    })
  }

  const handleNumberChange = ({ target }) => {
    onChange({
      ...value,
      number: target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit()
  }

  const { name, number } = value

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm