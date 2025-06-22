import React from 'react'
import ProfileImage from '../../assets/profile-img.png'
import ResumeImg from '../../assets/Resume-img.png'



function Hero() {
  return (
    <div className='bg-black text-white text-center py-16' >
        <img src={ProfileImage} alt=""
        className='mx-auto mb-8 w-48 h-48 object-cover rounded-full transform transition-transform 
        duration-300 hover:scale-105 '/>
        <h1 className='text-4xl font-bold '>
            I am {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Aritra Mahattam</span> ,
            Aspiring Full Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-400'> 
            I am a passionate Full Stack Developer with a keen interest in buildin dynamic and responsive web applications.
            I love to create seamless user experiences and solve complex problems through code.

        </p>
        <div className='mt-8 flex justify-center space-x-4'
        >
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden md:inline'
            onClick={()=>window.open("https://www.linkedin.com/in/aritra-mahattam-b43369299/")}>
                Connect With Me</button>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hidden md:inline
            'onClick={()=>window.open(ResumeImg)}>
                Resume</button>
        </div>
      
    </div>
  )
}

export default Hero
