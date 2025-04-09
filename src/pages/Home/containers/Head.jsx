import React, { useEffect, useRef } from 'react'
import Profile from "../../../assets/profile/profile.png"
import { useGlobalContext } from '../../../context/GlobalContext'
import { Contant, Linkedin, Github } from "../../../components/elements/Icons"
import LinkIcon from '../../../components/buttons/LinkIcon';
function Head({ className, ...props }) {
  const { contentPage } = useGlobalContext()
  const spanHeadName = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      animateWrite()
    }, 10000)
    return () => clearInterval(intervalId)
  }, [])

  const animateWrite = () => {
    setTimeout(() => {
      spanHeadName.current.classList.remove('animate-write')
      spanHeadName.current.classList.add('animate-write-reverse')
    }, 1000)
    setTimeout(() => {
      spanHeadName.current.classList.add('animate-write')
      spanHeadName.current.classList.remove('animate-write-reverse')
    }, 4000)
  }

  return (
    <section className={`w-full flex flex-col justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-7 ${className} `} {...props}>

      <div className='w-full flex flex-col-reverse xl:flex-row justify-evenly items-center'>
        <div className='w-full md:w-1/2 flex flex-col items-center'>
          <div className='text-3xl sm:text-5xl xl:text-6xl h-15 xl:h-20 flex font-bold gap-2 '>
            <h1>{contentPage.head.greeting}</h1>
            <span className='text-red-500 border-r-4 border-red-500 w-[16ch] whitespace-nowrap overflow-hidden animate-write' ref={spanHeadName}>{contentPage.head.name}</span>
          </div>
          <p className='mt-5 text-xl sm:text-3xl text-center w-full md:w-2xl '>{contentPage.head.description}</p>
        </div>


      </div>

      <div className='flex gap-5 md:gap-10 xl:gap-15 mt-15'>
        <LinkIcon className={"font-semibold"}>
          Curriculum
        </LinkIcon>
        <LinkIcon>
          <Github className="w-8 md:w-10 group-hover:scale-110" />
        </LinkIcon>
        <LinkIcon>
          <Linkedin className="w-8 md:w-10 group-hover:scale-110" />
        </LinkIcon>
        <LinkIcon>
          <Contant className="w-8 md:w-10 group-hover:scale-110" />
        </LinkIcon>
      </div>
    </section>
  )
}

export default Head