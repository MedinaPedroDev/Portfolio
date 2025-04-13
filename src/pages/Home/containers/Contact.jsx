import React from 'react'
import ContentSection from '../../../components/elements/ContentSection'
import TitleH2 from '../../../components/elements/TitleH2'
import FormContact from '../../../components/molecules/formContact/FormContact.jsx'
import Notificacion from "../../../assets/image/notification-4.png"
import { Linkedin, Contant, Github } from '../../../components/elements/Icons'
import { useGlobalContext } from '../../../context/GlobalContext'
function Contact() {
  const { contentPage } = useGlobalContext()

  return (
    <ContentSection id="contact">
      <TitleH2>{contentPage.contact.title}</TitleH2>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between mt-4'>
        <FormContact />
        <div className='w-full sm:w-[80%] lg:w-1/2 mt-10 flex flex-col justify-center items-center '>
          <img className='w-2/3' src={Notificacion} alt="Notificacion" />
          <div className='flex justify-center items-center gap-6'>
            <a className='transition-all  hover:scale-110' href="https://www.linkedin.com/in/medina-c-pedro-e/" target="_blank"><Linkedin className='w-10' /></a>
            <a className='transition-all  hover:scale-110' href="https://github.com/MedinaPedroDev" target="_blank"><Github className='w-10' /></a>
            <a className='transition-all  hover:scale-110' href="mailto:medinacamacho27@gmail.com" target="_blank"><Contant className='w-10' /></a>
          </div>
        </div>
      </div>
    </ContentSection>
  )
}

export default Contact