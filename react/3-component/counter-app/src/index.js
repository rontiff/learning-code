import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"

// from Course
import FirstComponent from './components/1-FirstComponent'
import SpecifyChildren from './components/2-SpecifyChildren'
import IntroState from './components/3-IntroState';
import SetAttributes from './components/4-SetAttributes';
import ClassNameFunction from './components/5-ClassNameFunction';
import ListRender from './components/6-ListRender';
import ConditionalRender from './components/7-ConditionRender';
import HandlingEvent from './components/8-HandlingEvent';
import BindingEventHandler from './components/9-BindingEventHandler';
import UpdateState from './components/10-UpdateState';
import PlusMinusOne from './components/11-PlusMinusOne';
import PassEventArgument from './components/12-PassEventArgument';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
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
    <HandlingEvent/>
    <br/><hr/>
    <BindingEventHandler/>
    <br/><hr/>
    <UpdateState/>
    <br/><hr/>
    <PlusMinusOne/>
    <br/><hr/>
    <PassEventArgument/>
    <br/><hr/>

  </React.StrictMode>
);
reportWebVitals();
