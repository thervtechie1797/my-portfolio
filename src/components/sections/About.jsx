import React from 'react'
import Container from '../layout/Container'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container>
      <section className='relative mt-16 py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden'>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-4x; mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
              I'm a <span className="font-semibold text-blue-600">React developer</span> passionate about crafting 
              modern, efficient, and visually engaging web applications. 
              I love turning complex ideas into elegant, performant user experiences.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
              My focus is on <span className="font-semibold text-purple-600">front-end development</span>, 
              where I combine clean code, intuitive design, and responsive layouts to build interfaces 
              that both users and developers enjoy. I’m constantly exploring new technologies to stay 
              ahead in the ever-evolving web ecosystem.
          </p>

          <Link to="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded--xl hover:bg-blue-700 hover:shadow-lg transform hover:translate-y-1 transition-all duration-300">
              Contact Me
          </Link>
        </div>
      </section>
    </Container>
  )
}

export default About