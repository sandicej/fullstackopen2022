import Content from "./Content"
import Header from "./Header"

const Course = ({ course }) => {
  const { id, name, parts } = course

  return (
    <div>
      <Header text={name} />
      <Content parts={parts} />
    </div>
  )
}

export default Course