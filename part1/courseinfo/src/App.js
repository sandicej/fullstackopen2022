const Part = (props) => {
  return <p>{props.name} {props.number}</p>
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts

  return <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts

  return (
    <>
      <Part
        name={part1.name}
        number={part1.exercises}
      />
      <Part
        name={part2.name}
        number={part2.exercises}
      />
      <Part
        name={part3.name}
        number={part3.exercises3}
      />
    </>
  );
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App
