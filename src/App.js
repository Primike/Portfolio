import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  "./components/Home/Home"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
