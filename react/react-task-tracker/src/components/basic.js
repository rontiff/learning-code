function App() {

    const name = "Sara"
    const x = true
    const y = false
  
  
    return (
      /* JSX use className to assign class similar to CSS */
      <div className="container">
        <h1>Hello From React</h1>
        <h2>Hello {name}</h2>
        <h2>Math calculation in curly bracket = {1+1}</h2>
        <h2>Example of if-else statement, {x? "yes": "no"}</h2>
        <h2>Example of if-else statement, {y? "yes": "no"}</h2>
      </div>
  
      // <h2>hello</h2> JSX expressions must have one parent element.
    );
  }
  
  export default App;