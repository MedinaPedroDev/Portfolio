import React from 'react'
import ContentSection from '../../../components/elements/ContentSection'
import Profile from '../../../assets/profile/profile.png'
import { ListSkill, colors } from '../data/listSkill'
import TitleH2 from '../../../components/elements/TitleH2.jsx'
import { useGlobalContext } from '../../../context/GlobalContext.jsx'
function About({ className, ...props }) {
    const { contentPage } = useGlobalContext()
    return (
        <ContentSection id="about" className={`relative`}>
            <div className='w-full flex flex-col justify-between items-center '>
                <TitleH2 >{contentPage.about.titleOne}</TitleH2>
                <div className='size-[12rem] lg:size-[14rem] mb-4 ring-4 ring-blue-900 rounded-full overflow-hidden bg-white'>
                    <img src={Profile} alt="head" className='object-cover object-[0px_10px] ' />
                </div>
                <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center '>
                    <div className='w-full'>
                        <h3 className='me-auto text-4xl text-center md:text-left text-red-500 font-semibold font-(family-name:--font-readex) mb-8'>Pedro Medina</h3>
                        <p className=' text-lg text-light my-5'>
                            {contentPage.about.paragraphOne}
                        </p>
                        <p className=' text-lg text-light my-5'>
                            {contentPage.about.paragraphTwo}
                        </p>
                        <p className=' text-lg text-light my-5'>
                            {contentPage.about.paragraphThree}
                        </p>

                    </div>

                </div>

            </div>
            <div className='w-full flex flex-col items-center justify-center mt-12'>
                <TitleH2>{contentPage.about.titleTwo}</TitleH2>
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