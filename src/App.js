
import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
const App = ()=>{



  return(
    <div>
    

   
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/history"  element={<History/>} />
      </Routes>
    
    </div>
  )
}

export default App;
