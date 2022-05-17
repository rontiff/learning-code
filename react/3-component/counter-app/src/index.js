import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"

// from Course
// import Counter from "./components/counter"
import FirstComponent from './components/FirstComponent'
import SpecifyChildren from './components/SpecifyChildren'
import IntroState from './components/IntroState';
import SetAttributes from './components/SetAttributes';
import ClassNameFunction from './components/ClassNameFunction';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionRender';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <FirstComponent/>
    <br/><hr/>
    <SpecifyChildren/>
    <br/><hr/>
    <IntroState/>
    <br/><hr/>
    <SetAttributes/>
    <br/><hr/>
    <ClassNameFunction/>
    <br/><hr/>
    <ListRender/>
    <br/><hr/>
    <ConditionalRender/>
    <br/><hr/>



    




  </React.StrictMode>
);
reportWebVitals();
