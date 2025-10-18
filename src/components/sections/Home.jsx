import React from 'react'
import Container from '../layout/Container'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <section className="relative text-center mt-10 py-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg overflow-hidden">
      {/* Subtle animated background effect */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

        <div className="relative z-10">
           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Rohit Verma</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          A passionate React developer crafting modern, responsive, and user-friendly web experiences.
        </p>
        <Link to="/projects" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded--xl hover:bg-blue-700 hover:shadow-lg transform hover:translate-y-1 transition-all duration-300">
            View Projects
        </Link>
        </div>
       
      </section>
    </Container>
  )
}

export default Home