import { form } from 'motion/react-client'
import React from 'react'
import ElementInputLabel from '../inputs/ElementInputLabel'
import ElementTextAreaLabel from '../inputs/ElementTextAreaLabel'
import { IconPaperPlane, IconMessage, IconAt, IconUserContact } from '../elements/Icons'
import { useAuthContext } from '../../context/AuthContext'
function FormContact() {
  const {contentPage} = useAuthContext()
  return (
    <form className='w-full md:w-[8 0%] lg:w-[40%] flex flex-col justify-between gap-8 p-8 rounded-2xl border-1 border-black/50 dark:border-amber-100/50'>
        <ElementInputLabel label={<span className='flex items-center'><IconUserContact className="w-6 me-2"/> {contentPage.contact.name}</span> } idInput='name' placeholder={contentPage.contact.placeholderName}  />
        <ElementInputLabel label={<span className='flex items-center'><IconAt className="w-6 me-2"/> {contentPage.contact.email}</span> } idInput='email'  placeholder={contentPage.contact.placeholderEmail} type='email'/>
        <ElementTextAreaLabel label={<span className='flex items-center'><IconMessage className="w-6 me-2"/> {contentPage.contact.message}</span> } idInput='message' placeholder={contentPage.contact.placeholderMessage} />
        <button className='rounded-full py-2 px-8 bg-sky-500 max-w-max mx-auto cursor-pointer flex hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50 hover:ring-2 hover:ring-sky-500/50 active:bg-sky-800' type='button'>{contentPage.contact.submit} <span className='ms-2'><IconPaperPlane className='w-6'/></span></button>
    </form>
  )
}

export default FormContact