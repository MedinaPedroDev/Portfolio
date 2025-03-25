import React from 'react'
import flagEs from "../../assets/image/flagpack--es.png"
import flagEn from "../../assets/image/flagpack--gb-nir.png"
import {useAuthContext} from '../../context/AuthContext.jsx'
function LanguajeToogle() {
    const {languaje, setLanguaje} = useAuthContext()
    
    return (
        <div className="w-[75px] h-[40px] border-2 border-dark-900 rounded-xl overflow-hidden">
            <label className="cursor-pointer block relative w-full h-full">
                <input type="checkbox" className="hidden peer" checked={languaje === 'en-US'} onChange={()=>{setLanguaje(languaje === 'en-US' ? 'es-ES' : 'en-US')}}/>
                <span className="w-max font-medium flex transition-all duration-300  absolute  left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 peer-checked:left-1/2 peer-checked:translate-x-full">
                    ES
                    <img src={flagEs} alt={"flag es"} className="ms-1 w-7"/>
                </span>
                <span className="w-max font-medium flex transition-all duration-300 absolute left-0 -translate-x-full bottom-1/2 translate-y-1/2 peer-checked:left-1/2 peer-checked:-translate-x-1/2">
                    EN
                    <img src={flagEn} alt={"flag es"} className="ms-1 w-7"/>
                </span>
            </label>
        </div>
    );
}

export default LanguajeToogle