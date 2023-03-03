const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => <p key={id}>{name} {exercises}</p>)}
    </div>
  )
}

export default Content
