import { useEffect, useState } from 'react'
import Navigate from '../../components/molecules/Navigate'
import ParticlesBasic from '../../components/elements/ParticlesBasic'
import Head from './containers/Head'
import About from './containers/About'
import Contact from './containers/Contact'
import Footer from '../../components/molecules/Footer'
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
        <Contact />
      </main>
      <Footer className={"bg-gray-200 dark:bg-gray-950 z-1"}/>
    </div>
  )
}

export default Home