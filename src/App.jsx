import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./components/sections/Home"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
function App() {


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
