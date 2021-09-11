import React from 'react';
import HomeComponent from './Component/HomeComponent';
import QuizComponent from './Component/QuizComponent';
import ResultComponent from './Component/ResultComponent';
import './Component/HomeComponent.css'
import './Component/ResultComponent.css'
import './Component/QuizComponent.css'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
     <HomeComponent/>
     <QuizComponent/>
     <ResultComponent/> 
    </div>
  );
}

export default App;