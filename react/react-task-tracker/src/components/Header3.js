
const Header3 = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}
Header3.defaultProps={
  title:'Task Tracker',
}

export default Header3