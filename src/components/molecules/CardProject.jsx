import React from 'react'
import { Github, ExternalLink } from "../../components/elements/Icons"
import { useGlobalContext } from '../../context/GlobalContext'
function CardProject({ title, description, imgs, technologies, linkGithub, linkDemo, className = "", ...props }) {
    const {  } = useGlobalContext()
    return (
        <article className={`flex flex-col gap-2 ${className}`} {...props}>
            <div>
                <img src={imgs[0]} alt="Preview" />
                <div>
                    {
                        imgs?.map((img, index) => (
                            <span>
                                <img key={index} src={img} alt={`Preview ${index + 1}`} />
                            </span>
                        ))
                    }
                </div>
            </div>
            <header>
                <h5>{title}</h5>
                <p>{description}</p>
            </header>
            <div>
                {
                    technologies?.map((tech) => (
                        <span key={tech.name} className={tech.color || "bg-gray-100 text-gray-800"}>
                            {
                                tech.icon ?
                                    <img src={tech.icon} alt={tech.name} />
                                    :
                                    null
                            }
                            {tech.name}
                        </span>
                    ))
                }
            </div>
            <footer className='flex justify-between gap-4'>
                <button>
                    <a href={linkGithub}>
                        <Github />
                        Repositorio Github
                    </a>
                </button>
                {
                    linkDemo ?

                        <button>
                            <a href={linkDemo}>
                                <ExternalLink />
                                Ir al Sitio
                            </a>
                        </button>
                        :
                        null
                }

            </footer>
        </article>
    )
}

export default CardProject