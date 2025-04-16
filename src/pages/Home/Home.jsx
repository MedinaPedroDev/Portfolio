import { useEffect, useState } from 'react'
import Navigate from '../../components/molecules/Navigate'
import ParticlesBasic from '../../components/elements/ParticlesBasic'
import Head from './containers/head/Head.jsx'
import About from './containers/About'
import Project from './containers/Project'
import Contact from './containers/Contact'
import Footer from '../../components/molecules/Footer'
import ShapeCircle from '../../components/elements/ShapeCircle'
function Home() {



  return (
    <div
      className='w-full flex flex-col justify-center items-center
   bg-neutral-300 dark:bg-slate-950 text-black dark:text-white'
    >
      <header className='w-full h-screen relative' id="home">
        <Navigate className={"z-2"} />
        <Head className={"z-1"} />
        <ParticlesBasic className={"w-full h-screen"} />
      </header>

      <main className=' w-full bg-neutral-300 dark:bg-slate-950 z-1 overflow-hidden relative flex flex-col justify-center items-center'>
        <ShapeCircle className={`-top-0.5 md:top-0 md:left-0 md:translate-x-1/2 translate-y-1/2  dark:bg-blue-950 bg-blue-200`} size={"30rem"} />
        <ShapeCircle className={`bottom-[60%] right-[20%] translate-x-1/2 translate-y-1/2  dark:bg-blue-950 bg-blue-200`} size={"30rem"} />
        <ShapeCircle className={`bottom-[30%] md:bottom-[20%] left-[10%] md:left-[30%] md:translate-x-1/2 translate-y-1/2  dark:bg-cyan-950 bg-cyan-200`} size={"30rem"} />
        <ShapeCircle className={`top-[35%] md:top-[30%]  -left-[5%] md:left-[5%]  translate-y-1/2  dark:bg-indigo-950 bg-indigo-200`} size={"40rem"} />
        <ShapeCircle className={`bottom-[5%] right-0 translate-x-1/2 translate-y-1/2 dark:dark:bg-sky-950 bg-sky-200`} size={"30rem"} />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer className={"bg-neutral-300 dark:bg-slate-950 z-1"} />
    </div>
  )
}

export default Home