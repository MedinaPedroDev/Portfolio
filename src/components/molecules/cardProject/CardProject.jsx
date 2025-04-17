import React, { useRef, useState } from 'react'
import { Github, ExternalLink } from "../../elements/Icons"
import { useGlobalContext } from '../../../context/GlobalContext'
import clsx from 'clsx'
import "./cardProject.css"
function CardProject({ title, description, imgs, technologies, linkGithub, linkDemo, className = "",
    colorBorder = {
        right: "to-cyan-500",
        bottom: "to-cyan-500",
        left:"to-cyan-500",
        top: "to-cyan-500"
    },
    ...props }) {
    const { contentPage } = useGlobalContext()
    const imgShow = useRef()
    const [indexImgActivate, setIndexImgActivate] = useState(0)
    const showImg = (e) => {
        setIndexImgActivate(Number(e.currentTarget.dataset.img))
        imgShow.current.src = imgs[e.currentTarget.dataset.img]
    }
    return (
        <article className={`card-animate-border flex flex-col justify-between items-center px-3 py-5 gap-2 w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[35%] rounded-2xl self-stretch overflow-hidden border-1 border-gray-900/50 relative dark:border-gray-300/50  ${className}`} {...props}>
            <span className={`animate-span bg-linear-to-r from-transparent ${colorBorder.right}`}></span>
            <span className={`animate-span bg-linear-to-b from-transparent ${colorBorder.bottom}`}></span>
            <span className={`animate-span bg-linear-to-l from-transparent ${colorBorder.left}`}></span>
            <span className={`animate-span bg-linear-to-t from-transparent ${colorBorder.top}`}></span>

            <div className="flex flex-col relative">
                <img src={imgs[0]} alt="Preview" className='w-full h-40 md:h-55' ref={imgShow} />
                <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-full   flex items-center justify-center gap-3 py-2 '>
                    {
                        imgs?.map((img, index) => (

                            <span className={clsx(
                                `w-[75px] cursor-pointer rounded-sm overflow-hidden border-2 border-neutral-900/75  transition-all ease-in-out duration-300`, {
                                "shadow-md shadow-cyan-500": index === indexImgActivate,
                                "shadow-sm shadow-slate-700": index !== indexImgActivate
                            }
                            )} key={index} data-img={index} onClick={showImg}>
                                <img key={index} src={img} alt={`Preview ${index + 1}`} />
                            </span>
                        ))
                    }
                </div>
            </div>
            <header className='flex flex-col justify-between items-center gap-2'>
                <h5 className='font-bold text-center text-2xl mt-3'>{title}</h5>
                <p>{description}</p>
            </header>
            <div className='flex flex-wrap gap-2 justify-center'>
                {
                    technologies?.map((tech) => (
                        <span key={tech.name} className={`flex items-center gap-2 px-3 py-1 rounded-full border-1 border-gray-900/50 dark:border-amber-100/50 ${tech.color || "bg-transparent "}`}>
                            {
                                tech.icon ?
                                    <img src={tech.icon} alt={tech.name} className='size-4' />
                                    :
                                    null
                            }
                            {tech.name}
                        </span>
                    ))
                }
            </div>
            <footer className='w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-3'>
                {
                    linkDemo ?

                        <a href={linkDemo} target='_blank' className='min-w-max w-[90%] md:w-[40%] text-sm py-2 px-4 rounded-full border-2 dark:border-gray-300/50 border-gray-900/50 bg-cyan-500 hover:bg-green-500/75 flex justify-center items-center gap-2 ring-slate-900/50  hover:ring-2  shadow-neutral-950/75 dark:shadow-white/75 hover:shadow-sm  hover:scale-105 transition-all duration-300'>
                            <ExternalLink className='size-8' />
                            {contentPage.projects.linkSeewebsite}
                        </a>
                        :
                        null
                }
                <a href={linkGithub} target='_blank' className='min-w-max w-[90%] md:w-[40%] text-sm py-2 px-4 rounded-full border-2 dark:border-gray-300/50 border-gray-900/50 bg-gray-300 dark:bg-gray-900 hover:bg-orange-400/75 dark:hover:bg-indigo-700/75 flex justify-center items-center gap-2 ring-slate-900/50  hover:ring-2  shadow-neutral-950/75 dark:shadow-white/75 hover:shadow-sm  hover:scale-105 transition-all duration-300'>
                    <Github className='size-8' />
                    {contentPage.projects.linkGitHub}
                </a>


            </footer>
        </article>
    )
}

export default CardProject