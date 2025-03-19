import {useEffect, useState} from 'react'
import Navigate from '../components/navigate/Navigate'
import ParticlesBasic from '../components/ParticlesBasic'
function Home() {
 
 

  return (
    <div
      className='w-full h-screen flex flex-col justify-between items-center
   bg-gray-200 dark:bg-gray-950 text-black dark:text-white'
    >
      <header className='w-full h-screen relative'>
        <Navigate />
        {/* <ParticlesBasic /> */}
      </header>

    </div>
  )
}

export default Home