import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Header4 from './components/Header4'


function App() {
  return (
    // <h2>hello</h2> JSX expressions must have one parent element.
    /* JSX use className to assign class similar to CSS */
    <div className="container">

      {/* Header 1*/}
      <Header1/>  
      {/* Header 2*/}
      <Header2 title='Task Tracker'/> 
      {/* Header 3*/}
      <Header3/>
      {/* Header 4*/} 
      <Header4/>

      

    </div>

    
  );
}

export default App;
