import { BrowserRouter as Router, Route,  Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
