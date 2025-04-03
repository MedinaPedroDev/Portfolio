import { IconCodeBlcok, IconContant, IconHome, IconAbout, IconCode} from '../elements/Icons'
import React from "../../assets/image/skill-icons--react-dark.png";
import Tailwind from "../../assets/image/skill-icons--tailwindcss-dark.png";
import { useAuthContext } from '../../context/AuthContext';
function Footer({ className, ...props }) {
    const {contentPage} = useAuthContext()
    return (
        <footer className={`w-full flex flex-col lg:flex-row justify-between items-center px-[4rem] md:px-[8rem] pt-[2rem] pb-[3rem] border-t-2 border-gray-600 rounded-3xl ${className}`}>
            <div className='flex flex-col items-center mb-3'>
                <a href='#' className='flex items-center justify-center text-4xl font-bold mb-2'>
                    <span className="inline-block align-text-top">&lt;</span>
                    <IconCodeBlcok className="w-9" />
                    <span className='text-xl'>P. Medina</span>
                    <span>/&gt;</span>
                </a>
                <p className="mb-4">{contentPage.footer.messageOne}</p>
                <p className="mb-4">{contentPage.footer.messageTwo}</p>
            </div>
            <div className='flex flex-col items-center'>
                <h6 className="font-bold text-xl mb-4">{contentPage.footer.sectionNavigate}</h6>
                <ul>
                    <li><a href="" className="flex mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><IconHome className="w-4 me-2"/> {contentPage.navigate.home}</a></li>
                    <li><a href="" className="flex mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><IconAbout className="w-4 me-2"/> {contentPage.navigate.about}</a></li>
                    <li><a href="" className="flex mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><IconCode className="w-4 me-2"/> {contentPage.navigate.projects}</a></li>
                    <li><a href="" className="flex mb-3 hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600"><IconContant className="w-4 me-2"/> {contentPage.navigate.contact}</a></li>
                </ul>
            </div>
            <div className='flex flex-col items-center'>
                <h6 className="font-bold text-xl mb-4">{contentPage.footer.sectionWeb}</h6>
                <p className="flex items-center"><img src={React} className="size-10" alt="React" />React</p>
                <p className="flex items-center"><img src={Tailwind} className="size-10" alt="Tailwind" />Tailwind CSS</p>
                <p>{contentPage.footer.by} <span className='font-bold hover:text-blue-800 dark:hover:text-red-600'>Pedro Medina</span> </p>
            </div>
        </footer>
    )
}

export default Footer