const Header4 = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}
Header4.defaultProps={
  title:'Task Tracker',
}

export default Header4