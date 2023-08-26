import './App.css';
import ChatMessage from './ChatMessage';
import {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Login from './component/login';
import Answer from './component/Answer';
// import { application } from 'express';

function App() {
  return(
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/Answer' element={<Answer/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
