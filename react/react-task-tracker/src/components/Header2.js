// type rafce , the short cut of the extension.

const Header2 = (props) => {
  return (
    <header>
        <h1 style={headingStyle}>{props.title}</h1>
    </header>
  )
}

//CSS in React
const headingStyle={
  color:'red',
  backgroundColor:'grey'
}


export default Header2