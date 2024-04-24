import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login';
import Connections from './pages/Connections/connection';
import Forms from './components/Forms';
import Startups from './pages/startups/Startups';
import Mentors from './pages/Mentors/Mentor';
import AddStartup from './pages/startups/AddStartup';
// import Todo from '../src/__test__/todo'
function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const authenticate = async() => {
    try
    {
      const token = localStorage.getItem('token');
      console.log(token);
      if(token)
      {
          setLoggedIn(true);
      }
      else
      {
        setLoggedIn(false);
      }
    }
    catch(err){
      console.log(err);
      setLoggedIn(false);
    }
  }
  useEffect(()=>{
    authenticate();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }
  return (
    <div>
      <BrowserRouter>
      {/* <Login LoggedIn={LoggedIn} handleLogout={handleLogout}/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/profile" element={<Connections/>} />
          <Route path="/settings" element={<Connections/>} />
          <Route path="/signout" element={<Connections/>} />
          <Route path="/addconnections" element={<Forms />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/startup/new" element={<AddStartup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
