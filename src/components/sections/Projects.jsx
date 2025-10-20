import React from 'react'
import Container from '../layout/Container'
import ProjectCard from '../layout/ProjectCard'

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind, and EmailJS.",
    link: "https://github.com/thervtechie1797/my-portfolio",
    image: "/src/assets/images/page_1_social_preview.webp",
    tech: ["React", "Tailwind", "EmailJS", "Redux", "Components", "JSX"],
    details:
      "A full-featured personal portfolio website showcasing projects, skills, and contact form using EmailJS. Fully responsive with modern UI design.",
  },
  {
    id: 2,
    title: "Flight Booking Application",
    description: "Real-time flight booking app using Node.js and MonogoDB.",
    link: "https://github.com/thervtechie1797/weather-app",
    image: "/src/assets/images/flightBooking.webp",
    tech: ["Node", "API", "Express", "MongoDB", "Mongoose", "Postman"],
    details:
      "Fetches live weather data from OpenWeatherMap API. Features dynamic backgrounds based on weather conditions and responsive layout for mobile and desktop.",
  },
  {
    id: 3,
    title: "Chatter-Up Website",
    description: "Personal portfolio built with React, Tailwind, and EmailJS.",
    link: "https://github.com/thervtechie1797/ChatterUp-Application/tree/main/chatterUp-Application",
    image: "/src/assets/images/chatApp.webp",
    tech: ["Node", "Tailwind", "Nodemail", "Express", "Socket.io"],
    details:
      "Built using Node.js and Socket.IO, it supports live messaging with minimal latency, providing a seamless chatting experience.",
  },
  
  
]


const Projects = () => {
  return (
    <Container>
       <section className="text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-10">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              tech={project.tech}
              details={project.details}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Projects