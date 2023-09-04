import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Answer from './component/Answer';


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
