import React from 'react'
import Container from '../layout/Container'

const Projects = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-white border rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-bold mb-2">Project 1</h3>
          <p className="text-gray-600">Short description of the project.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">View Project</a>
        </div>
        <div className="bg-white border rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-bold mb-2">Project 2</h3>
          <p className="text-gray-600">Short description of the project.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">View Project</a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-white border rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-bold mb-2">Project 3</h3>
          <p className="text-gray-600">Short description of the project.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">View Project</a>
        </div>
        <div className="bg-white border rounded-xl shadow-lg p-6 hover:scale-105 transform transition">
          <h3 className="text-2xl font-bold mb-2">Project 4</h3>
          <p className="text-gray-600">Short description of the project.</p>
          <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">View Project</a>
        </div>
      </div>
    </Container>
  )
}

export default Projects