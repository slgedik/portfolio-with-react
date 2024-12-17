import React from 'react';
export default function About() {
    return(
    <div id="about" className="about justify-center items-center"  style={{
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/07/99/58/92/360_F_799589233_D3b3TPaNdlFCeZ40eJpNxRD9cfs16h9n.jpg)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh', 
      }}> 
      <h2 className='py-8 underline decoration-wavy italic font-semibold'>About Me</h2>
      <div className='bg-gray-300 rounded-lg mx-12 drop-shadow-2xl '>
            <p className=' px-12 py-8'>As a collaborative and innovative engineer, I thrive in team 
        environments where I can contribute fresh ideas and solutions. With a 
        positive and forward-thinking mindset, I am dedicated to leveraging 
        technology for the betterment of people and society. Committed to 
        continuous learning, I am eager to take on new challenges and 
        contribute to future advancements in the field.</p>
      </div>
      
    <h2 className='mt-16 underline decoration-wavy italic font-semibold'>Technologies I am interested in</h2>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center bg-gray-300 rounded-lg mx-12 mt-4 drop-shadow-2xl w-32 h-32 '>
                <ul>
                    <li>• Java</li>
                    <li>• React.js</li>
                    <li>• Vue.js</li>
                    <li>• Postgresql</li>
                </ul>
            </div>
        </div>
    </div>
    )
}