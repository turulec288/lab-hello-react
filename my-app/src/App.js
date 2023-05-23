// src/App.js
import './App.css';


import NavBar from   './components/NavBar' ;
import Button from './components/Button'
import Title from './components/Title'

import Paragraph from './components/Paragraph'

import example from "./images/ironhack-logo-xs.png";


function App() {
  return (
    <div className="App">
   
   <img src={example} alt="example" /> 
   <NavBar />
    <Title />
    <Paragraph />
    <Button />




    </div>
  );
}
export default App;