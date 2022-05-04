import Header from './components/Header1'
import Header2 from './components/Header2'


function App() {
  return (
    // <h2>hello</h2> JSX expressions must have one parent element.
    /* JSX use className to assign class similar to CSS */
    <div className="container">
      {/* Header 1 */}
      <Header title='Hello'/>  {/* pass the title to the props */}
      {/* Header 2 */}
      

    </div>

    
  );
}

export default App;
