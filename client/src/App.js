import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login';
import Connections from './pages/Connections/connection';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connections" element={<Connections />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
