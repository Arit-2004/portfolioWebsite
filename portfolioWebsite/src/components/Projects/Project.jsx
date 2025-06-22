import React from 'react'
import AIChatbot from '../../assets/ai-chatbot.PNG'
import CurrencyImg from '../../assets/curr-convert.PNG'
import GameImg from '../../assets/game-img.PNG'
import { Link } from 'react-router-dom'
function Project() {
 
    const projects =[
        {
            id:1,
            title:"AI chatbot",
            description:"A chatbot that can answer questions and provide information on various topics using AI.",
            technologies: "HTML , CSS , JAVASCRIPT",
            image: AIChatbot,
            github:"https://github.com/Arit-2004/AI-chatbot"

        },

        {
            id:2,
            title:"Currency Convertor",
            description:"A web application that allows users to convert currencies in real-time using an API.",
            technologies: "REACT JS",
            image: CurrencyImg,
            github:"https://github.com/Arit-2004/currencyConvertor"        
        },

        {
            id:3,
            title:"TIC-TAC-TOE",
            description:"A simple tic-tac-toe game , allowing two players to play against each other.",
            technologies:"HTML , CSS , JAVASCRIPT",
            image: GameImg,
            github: "https://github.com/Arit-2004/js-project"      
        },
    ];

     
  return (
    <div className='bg-black text-white py-20' id="projects">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <p className='text-gray-400 mb-4'>{project.description}</p>
              <Link to={project.github} target='blank' className='className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>View On Github</Link>
              

            </div>
          ))}

        </div>

        </div>
    </div>    
  )
}

export default Project
