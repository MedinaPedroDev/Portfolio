import { Link } from 'react-router'
import DayNightToggleSwitch from "../toggles/DayNightToggleSwitch.jsx"
import LanguajeToogle from "../toggles/LanguajeToogle.jsx"
import { IconHome, IconAbout, IconCode, IconContant } from "../elements/Icons.jsx"
import { useAuthContext } from '../../context/AuthContext.jsx'
function Navigate({ className, ...props }) {
    const { contentPage } = useAuthContext()
    return (
        <>
            <nav className={`bg-gray-200 dark:bg-gray-950/50 transition-all duration-100 fixed left-1/2 -translate-x-1/2 top-3 w-max px-9 sm:px-9 md:px-18 lg:px-32 py-4 flex justify-center items-center gap-4 lg:gap-6 border-2 rounded-3xl z-1 ${className}`} {...props}>
                <ul className='flex text-lg font-semibold gap-6'>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <a className='flex justify-center items-center min-w-4' href='#home'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.home}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><IconHome className='w-7' /></span>
                        </a>

                    </li>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <Link className='flex justify-center items-center min-w-4'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.about}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><IconAbout className='w-7' /></span>
                        </Link>
                    </li>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <Link className='flex justify-center items-center min-w-4'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.projects}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><IconCode className='w-7' /></span>
                        </Link>

                    </li>
                    <li className='hover:underline hover:underline-offset-8 hover:decoration-blue-600 active:text-blue-700 hover:decoration-3 hover:dark:decoration-red-600 active:dark:text-red-600'>
                        <Link className='flex justify-center items-center min-w-4'>
                            <span className='transition-all duration-100 scale-0 absolute sm:scale-none sm:static'>{contentPage.navigate.contact}</span>
                            <span className='transition-all duration-100 sm:scale-0 sm:absolute hover:text-red-600'><IconContant className='w-7' /></span>
                        </Link>
                    </li>
                </ul>
                <LanguajeToogle />
                <DayNightToggleSwitch />
            </nav>
        </>
    )
}

export default Navigate