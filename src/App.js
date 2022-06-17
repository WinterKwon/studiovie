import React,{Link} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';

function App() {
  return (
   
     
      <BrowserRouter>
            <Routes>
                <Route path='/' element = {<HomePage />} />
                <Route path='/register' element = {<RegisterForm />} />
            </Routes>
        </BrowserRouter>
      
    
  );
}

export default App;


