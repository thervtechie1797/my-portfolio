import React from 'react'
import Container from '../layout/Container'

const Contact = () => {
  return (
     <Container>
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-4">You can reach me at:</p>
      <ul className="text-gray-700">
        <li>Email: your.email@example.com</li>
        <li>GitHub: <a href="https://github.com/thervtechie1797" className="text-blue-600 hover:underline">thervtechie1797</a></li>
        <li>LinkedIn: <a href="#" className="text-blue-600 hover:underline">Your LinkedIn</a></li>
      </ul>
    </Container>
  )
}

export default Contact