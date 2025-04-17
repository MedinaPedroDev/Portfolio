import React, { useEffect, useRef } from 'react'
import Profile from "../../../../assets/profile/profile.webp"
import { useGlobalContext } from '../../../../context/GlobalContext'
import { Contant, Linkedin, Github } from "../../../../components/elements/Icons"
import Curriculum from "../../../../assets/curriculum/CurriculumPedroMedina.pdf"
import CurriculumEnglish from "../../../../assets/curriculum/CurriculumPedroMedinaEnglish.pdf"
import LinkIcon from '../../../../components/buttons/LinkIcon';
import "./head.css"
function Head({ className, ...props }) {
  const { contentPage, languaje } = useGlobalContext()
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
      <div className='w-full flex flex-col-reverse xl:flex-row justify-center items-center'>
        <div className='w-full md:w-1/2 flex flex-col items-center '>
          <div className='text-2xl sm:text-3xl md:text-4xl xl:text-6xl h-15 xl:h-20 flex font-bold gap-2 '>
            <h1>{contentPage.head.greeting}</h1>
            <span className='text-sky-500 border-r-4 border-sky-500 w-[15ch] whitespace-nowrap overflow-hidden animate-write' ref={spanHeadName}>{contentPage.head.name}</span>
          </div>
          <p className='mt-2 lg:mt-5 text-xl sm:text-3xl text-center w-full md:w-2xl '>{contentPage.head.description}</p>
        </div>
        {/* <div className='size-[8rem] rounded-full overflow-hidden bg-white lg:ml-18 mb-5 lg:mb-0'>
          <img src={Profile} alt="head" className='object-cover object-[-7px_10px] h-[9rem] ' />
        </div> */}
      </div>

      <div className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-12 mt-15'>
        <LinkIcon href={languaje === "en-US" ? CurriculumEnglish : Curriculum} target="_blank" className={"font-semibold"}>
          Curriculum
        </LinkIcon>
        <LinkIcon href="https://github.com/MedinaPedroDev" target="_blank" >
          <Github className="w-8 md:w-10 group-hover:scale-110" />
        </LinkIcon>
        <LinkIcon href="https://www.linkedin.com/in/medina-c-pedro-e/" target="_blank" >
          <Linkedin className="w-8 md:w-10 group-hover:scale-110" />
        </LinkIcon>
        <LinkIcon className='flex items-center  gap-2 ' href="mailto:medinacamacho27@gmail.com" target="_blank">
          <Contant className="w-8  group-hover:scale-110" />
          <span className=' font-bold text-lg/8'>medinacamacho27@gmail.com</span>
        </LinkIcon>
      </div>
    </section>
  )
}

export default Head