import { useEffect, useState } from 'react'
import Navigate from '../components/header/Navigate'
import ParticlesBasic from '../components/header/ParticlesBasic'
import Head from '../components/header/Head'
import About from '../components/about/About'

function Home() {



  return (
    <div
      className='w-full flex flex-col justify-between items-center
   bg-gray-200 dark:bg-gray-950 text-black dark:text-white'
    >
      <header className='w-full h-screen relative' id="home">
        <Navigate className={"z-2"} />
        <Head className={"z-1"} />
        <ParticlesBasic className={"w-full h-screen"} />
      </header>

      <main className=' w-full bg-gray-200 dark:bg-gray-950 z-1'>
        <About />
      </main>

    </div>
  )
}

export default Home