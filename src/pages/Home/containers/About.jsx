import React from 'react'
import ContentSection from '../../../components/elements/ContentSection'
import Profile from '../../../assets/profile/profile.png'
import { ListSkill, colors } from './ListSkill.js'
import TitleH2 from '../../../components/elements/TitleH2.jsx'
function About({ className, ...props }) {

    return (
        <ContentSection id="about" className={`relative`}>
            <div className='w-full flex flex-col justify-center items-center '>
                <TitleH2 >¿Quién soy?</TitleH2>
                <div className='w-full flex flex-col-reverse md:flex-row items-center justify-evenly '>
                    <div className='w-full md:w-3/4'>
                        <h3 className='me-auto text-4xl text-center md:text-left text-red-500 font-semibold font-(family-name:--font-readex) mb-8'>Pedro Medina</h3>
                        <p className='max-w-4xl text-xl my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet voluptas nam minima excepturi obcaecati, delectus nisi fugit voluptatibus est molestiae doloribus sint reiciendis earum qui veniam recusandae dignissimos, ratione corporis?</p>
                        <p className='max-w-4xl text-xl my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, rerum cupiditate, aperiam aut eaque consectetur sequi mollitia incidunt asperiores harum, nostrum illum dicta ex atque veniam maiores inventore a quas?</p>
                    </div>
                    <div className='w-full md:w-1/4 flex justify-center items-center self-start'>

                        <div className='w-[15rem] md:w-[15rem] h-[15rem] md:h-[15rem] bg-slate-900 border-4 border-gray-600 rounded-full overflow-clip mb-16 xl:mb-0'>
                            <img src={Profile} alt="head" className='w-full h-full translate-x-1' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-12'>
                <TitleH2>Tecnologias y Herramientas</TitleH2>
                <ul className='w-full md:w-3/4 flex justify-evenly items-center flex-wrap gap-8' >
                    {
                        ListSkill?.map((skill, index) => {
                            return skill ? (

                                <li key={index}
                                    className={`flex font-semibold flex-col min-w-32 items-center mb-4 shadow-xl cursor-pointer shadow-${skill?.color}/50 inset-shadow-sm inset-shadow-${skill?.color} ring-2 ring-${skill?.color}/50 rounded-md p-4 px-3.5 md:px-5 hover:scale-105 transition-all ease-in-out duration-300 bg-gray-950 text-white hover:bg-${skill?.color}/25`}
                                >

                                    <span className='mb-2'>
                                        <img src={skill?.icon} alt={skill?.name} className='w-17 h-17' />
                                    </span>
                                    {skill?.name}
                                </li>

                            ) : null
                        })
                    }
                </ul>
            </div>
        </ContentSection>
    )
}

export default About