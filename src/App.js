import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
