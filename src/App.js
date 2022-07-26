import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Apppage from './pages/Apppage';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Career from './pages/Career';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
  },[]);

  return (
    <div className="App">
      {loading?
      
      <div className='loader'>
        <ClipLoader size={150} color={'#D0021B'} loading={loading}/>
      </div> 
      
      :
        <Router>
        <Routes>
          <Route path='/' element={<Apppage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/careers' element={<Career/>}/>
        </Routes>
      </Router>
      
      }
      
    </div>
  );
}

export default App;
