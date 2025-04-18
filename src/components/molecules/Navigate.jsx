import { Link } from 'react-router'
import DayNightToggleSwitch from "../toggles/DayNightToggleSwitch.jsx"
import LanguajeToogle from "../toggles/LanguajeToogle.jsx"
import { Home, About, Code, Contant } from "../elements/Icons.jsx"
import { useGlobalContext } from '../../context/GlobalContext.jsx'
import { useRef, useEffect, useState } from 'react'
function Navigate({ className = "", ...props }) {
    const navigateRef = useRef(null)
    const { contentPage } = useGlobalContext()
   


    return (
        <>
            <nav ref={navigateRef} className={`bg-gray-100 dark:bg-gray-950 transition-all duration-100 fixed z-1 left-1/2 -translate-x-1/2 top-0 w-full px-8  md:px-18 lg:px-32 py-4 flex justify-center items-center gap-4 lg:gap-6 ${className}`} {...props}>
                <ul className='flex text-lg font-semibold gap-5 xl:gap-6 '>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <a className='flex justify-center items-center min-w-4' href='#home'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.home}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><Home className='w-7' /></span>
                        </a>

                    </li>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <a className='flex justify-center items-center min-w-4' href='#about'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.about}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><About className='w-7' /></span>
                        </a>
                    </li>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <a className='flex justify-center items-center min-w-4' href='#projects'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.projects}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><Code className='w-7' /></span>
                        </a>

                    </li>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <a className='flex justify-center items-center min-w-4' href='#contact'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.contact}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><Contant className='w-7' /></span>
                        </a>
                    </li>
                </ul>
                <LanguajeToogle />
                <DayNightToggleSwitch />
            </nav>
        </>
    )
}

export default Navigate