import React from 'react';
import ProfileImage from '../../assets/profile-img.PNG';

function About() {
  return (
    <div className='bg-black text-white py-20' id="aboutme">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-3xl font-bold text-center mb-12'>About Me</h2>

        <div className='flex flex-col md:flex-row items-center justify-between gap-20'>
          {/* Profile Image */}
          <img
            src={ProfileImage}
            alt="Profile"
            className='w-72 h-80 rounded object-cover mb-8'
          />

          {/* About + Skills + Stats */}
          <div className='flex flex-col gap-6'>
            {/* Introduction */}
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-2xl font-bold mb-4'>
              Hello World! I am a web developer, software engineer, and tech
              enthusiast passionate about creating dynamic, user-friendly
              experiences. I specialize in building efficient, high-performing
              websites and applications, constantly exploring new technologies
              to innovate and improve.
            </p>

            {/* Skill: HTML & CSS */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-2/12">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
            </div>

            {/* Skill: React JS */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-2/12">React JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
            </div>

            {/* Skill: JavaScript */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-2/12">JavaScript</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
            </div>

            {/* Skill: C Programming */}
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="w-2/12">C Programming</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
            </div>

            {/* Stats: Experience & Projects */}
            <div className='mt-12 flex flex-col md:flex-row gap-12 text-center justify-center'>
              <div>
                <h3 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>1+</h3>
                <p>Years Experience<br />On Web Development</p>
              </div>
              <div>
                <h3 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>5+</h3>
                <p>Projects<br />Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
