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
  return (
    <div>
      <BrowserRouter>
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
