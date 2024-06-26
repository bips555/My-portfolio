import React from 'react'

function Intro() {
  return (
    <div className='bg-primary text-secondary h-[80vh] flex flex-col items-start justify-center gap-8'>
<h1 className='text-white'>Hi , I am</h1>
<h1 className='text-secondary text-7xl sm:text-3xl'>Biplov Subedi</h1>
<h1 className='text-white text-6xl  sm:text-3xl'>I am a passionate MERN stack Developer.</h1>
<p className='text-secondary w-2/3 '>I have been making cool full stack projects for a while now. I love dwelling in the world of web.</p>
<button className='border-tertiary border-2 text-white px-10 py-5 rounded '>Get Started</button>
    </div>
  )
}
 
export default Intro