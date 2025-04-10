import { useGlobalContext } from '../../../context/GlobalContext'
import {
    JS,
    React,
    Tailwind,
    Pyton,
    HTML,
    CSS,
    Django,
    MySql,
    PostgreSQL,
    Bootstrap,

} from "./listIconTechnologies"


import bombita_1 from '../../../assets/projects/bombita_1.png'
import bombita_2 from '../../../assets/projects/bombita_2.png'
import bombita_3 from '../../../assets/projects/bombita_3.png'
import eComerce_1 from '../../../assets/projects/e-commerce_1.jpg'
import eComerce_2 from '../../../assets/projects/e-commerce_2.jpg'
import eComerce_3 from '../../../assets/projects/e-commerce_3.jpg'
import panaderia_1 from '../../../assets/projects/panaderia_1.jpg'
import panaderia_2 from '../../../assets/projects/panaderia_2.jpg'
import panaderia_3 from '../../../assets/projects/panaderia_3.jpg'
import pokemon_1 from '../../../assets/projects/pokemon_1.jpg'
import pokemon_2 from '../../../assets/projects/pokemon_2.jpg'
import pokemon_3 from '../../../assets/projects/pokemon_3.jpg'

function listProject() {
    const { contentPage } = useGlobalContext()
    return [
        {
            "title": contentPage?.projects.listProjects.projectBakery?.title,
            "description": contentPage?.projects.listProjects.projectBakery?.description,
            "imgs": [
                panaderia_1,
                panaderia_2,
                panaderia_3
            ],
            "technologies": [
                {
                    "name": "HTML",
                    "icon": HTML
                },
                {
                    "name": "CSS",
                    "icon": CSS
                },
                {
                    "name": "JavaScript",
                    "icon": JS
                },
                {
                    "name": "Bootstrap",
                    "icon": Bootstrap
                }
            ],
            "linkGithub": "https://github.com/MedinaPedroDev/bakery-landing-page",

        },
        {
            "title": contentPage?.projects.listProjects.projectEcommerce?.title,
            "description": contentPage?.projects.listProjects.projectEcommerce?.description,
            "imgs": [
                eComerce_1,
                eComerce_2,
                eComerce_3
            ],
            "technologies": [
                {
                    "name": "Django",
                    "icon": Django
                },
                {
                    "name": "MySql",
                    "icon": MySql
                },
                {
                    "name": "Bootstrap",
                    "icon": Bootstrap
                }
            ],
            "linkGithub": "https://github.com/MedinaPedroDev/django_e-comerce",

        },
        {
            "title": contentPage?.projects.listProjects.projecPokemon?.title,
            "description": contentPage?.projects.listProjects.projectEcommerce?.description,
            "imgs": [
                pokemon_1,
                pokemon_2,
                pokemon_3
            ],
            "technologies": [
                {
                    "name": "React",
                    "icon": React
                },
                {
                    "name": "Bootstrap",
                    "icon": Bootstrap
                }
            ],
            "linkGithub": "https://github.com/MedinaPedroDev/mundo_pokemon",

        },
        {
            "title": contentPage?.projects.listProjects.projectBombita?.title,
            "description": contentPage?.projects.listProjects.projectEcommerce?.description,
            "imgs": [
                bombita_1,
                bombita_2,
                bombita_3
            ],
            "technologies": [
                {
                    "name": "Pyton",
                    "icon": Pyton
                },
                {
                    "name": "React",
                    "icon": React
                },
                {
                    "name": "Django",
                    "icon": Django
                },
                {
                    "name": "MySql",
                    "icon": MySql
                },
                {
                    "name": "Bootstrap",
                    "icon": Bootstrap
                },
            ],
            "linkGithub": "https://github.com/MedinaPedroDev/bombita-recreacion",


        }
    ]
}

export default listProject