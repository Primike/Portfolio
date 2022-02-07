import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from  "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HashRouter>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
      </HashRouter>
    </div>
  );
}

export default App;
