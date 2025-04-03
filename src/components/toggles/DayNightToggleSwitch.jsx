import React from 'react';
import { IconMoon, IconSun } from '../elements/Icons';
import {useAuthContext} from '../../context/AuthContext'
function DayNightToggleSwitch() {
    const {setdarkMode, darkMode} = useAuthContext()

    return (
        <div className="w-[40px] h-[40px] border-2 border-dark-900 rounded-xl overflow-hidden">
            <label className="cursor-pointer block relative w-full h-full ">
                <input type="checkbox" className="hidden " onChange={()=>{setdarkMode(!darkMode)}}/>
                <span className="text-dark-900 transition-all duration-100  absolute  left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 scale-none dark:scale-0">
                    <IconSun className="w-6" />
                </span>
                <span className="text-dark-900 transition-all duration-100 absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 scale-0 dark:scale-none">
                    <IconMoon className="w-6" />
                </span>
            </label>
        </div>
    );
}

export default DayNightToggleSwitch;

