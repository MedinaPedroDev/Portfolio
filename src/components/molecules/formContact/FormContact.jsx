import { form } from 'motion/react-client'
import React from 'react'
import ElementInputLabel from '../../inputs/ElementInputLabel'
import ElementTextAreaLabel from '../../inputs/ElementTextAreaLabel'
import { PaperPlane, Message, At, UserContact, Phone } from '../../elements/Icons'
import { useGlobalContext } from '../../../context/GlobalContext'
import "./formContact.css"
function FormContact() {
  const { contentPage } = useGlobalContext()

  return (
    <form className='bg-neutral-300 dark:bg-slate-950 w-full md:w-[80%] lg:w-[40%] flex flex-col justify-between gap-8 p-8 rounded-2xl border-1 border-black/50 dark:border-amber-100/50'
      action="https://formsubmit.co/medinacamacho27@gmail.com" method="POST"
    >
      <ElementInputLabel label={<span className='flex items-center'><UserContact className="w-6 me-2" /> {contentPage.contact.name}</span>} idInput='name' placeholder={contentPage.contact.placeholderName} required />
      <ElementInputLabel label={<span className='flex items-center'><At className="w-6 me-2" /> {contentPage.contact.email}</span>} idInput='email' placeholder={contentPage.contact.placeholderEmail} type='email' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
      {/* <ElementInputLabel label={<span className='flex items-center'><Phone className="w-6 me-2"/> {contentPage.contact.phone}</span> } idInput='phone'  placeholder={contentPage.contact.placeholderEmail} type='number'/> */}
      <ElementTextAreaLabel label={<span className='flex items-center'><Message className="w-6 me-2" /> {contentPage.contact.message}</span>} idInput='message' placeholder={contentPage.contact.placeholderPhone} maxLength={500} required />

      <button className='relative overflow-hidden rounded-full py-2 px-8 bg-sky-500 max-w-max mx-auto cursor-pointer flex hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50 hover:ring-2 hover:ring-sky-500/50 active:bg-sky-800' type='submit'>{contentPage.contact.submit} 
      <span className='inner'></span>
      <span className='ms-2'><PaperPlane className='w-6' /></span></button>
    </form>
  )
}

export default FormContact