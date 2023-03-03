const Content = ({ parts }) => parts.map(({name, exercises, id}) => <p key={id}>{name} {exercises}</p>)

export default Content
