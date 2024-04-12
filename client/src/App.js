import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login';
import Connections from './pages/Connections/connection';
import AddConnection from './pages/Connections/addConnection';
import Forms from './components/Forms';
import Startups from './pages/startups/Startups';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
