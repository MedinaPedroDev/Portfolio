import { CodeBlcok, Contant, Home, About, Code } from '../elements/Icons'
import React from "../../assets/image/skill-icons--react-dark.webp";
import Tailwind from "../../assets/image/skill-icons--tailwindcss-dark.webp";
import { useGlobalContext } from '../../context/GlobalContext';
function Footer({ className = "", ...props }) {
    const { contentPage } = useGlobalContext()
    return (
        <footer className={`w-full flex flex-col lg:flex-row justify-center items-center border-t-2 border-gray-600 rounded-3xl ${className}`}>
            <div className='w-full flex flex-col lg:flex-row max-w-[1660px] justify-between items-center px-[1.5rem] md:px-[8rem] py-[2rem]'>
                <div className='flex flex-col items-center mb-3'>
                    <a href='#' className='flex items-center justify-center text-4xl font-bold mb-2'>
                        <span className="inline-block align-text-top">&lt;</span>
                        <CodeBlcok className="w-9" />
                        <span className='text-xl font-(family-name:--font-playball)'>P. Medina</span>
                        <span>/&gt;</span>
                    </a>
                    <p className="mb-3">{contentPage.footer.messageOne}</p>
                    <p className="mb-3">{contentPage.footer.messageTwo}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h6 className="font-bold text-xl mb-3 md:mb-4">{contentPage.footer.sectionNavigate}</h6>
                    <ul>
                        <li><a href="#home" className="flex mb-1 md:mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><Home className="w-4 me-2" /> {contentPage.navigate.home}</a></li>
                        <li><a href="#about" className="flex mb-1 md:mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><About className="w-4 me-2" /> {contentPage.navigate.about}</a></li>
                        <li><a href='#projects' className="flex mb-1 md:mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><Code className="w-4 me-2" /> {contentPage.navigate.projects}</a></li>
                        <li><a href="#contact" className="flex mb-1 md:mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><Contant className="w-4 me-2" /> {contentPage.navigate.contact}</a></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <h6 className="font-bold text-xl mb-3 md:mb-4">{contentPage.footer.sectionWeb}</h6>
                    <p className="flex items-center"><img src={React} className="size-10" alt="React" />React</p>
                    <p className="flex items-center"><img src={Tailwind} className="size-10" alt="Tailwind" />Tailwind CSS</p>
                    <p>{contentPage.footer.by} <span className='font-bold hover:text-blue-800 dark:hover:text-red-600'>Pedro Medina</span> </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer