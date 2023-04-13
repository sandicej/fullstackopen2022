const Filter = ({ value, onChange }) => {

  const handleFilterChange = ({ target }) => {
    onChange(target.value)
  }

  return (
    <>
      filter shown with<input value={value} onChange={handleFilterChange} />
    </>
  )
}

export default Filter
