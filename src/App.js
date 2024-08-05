import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import PrivatePolicy from './components/PrivatePolicy/PrivatePolicy';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="projects" element={<Projects />} />
              <Route path='privatepolicy' element={<PrivatePolicy/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
