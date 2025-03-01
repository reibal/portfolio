import NextJSIcon from '../components/icons/technologies/NextJSIcon.astro'
import TailwindIcon from '../components/icons/technologies/TailwindIcon.astro'
import ShadcnIcon from '../components/icons/technologies/ShadcnIcon.astro'
import NextAuthIcon from '../components/icons/technologies/NextAuthIcon.astro'
import PrismaIcon from '../components/icons/technologies/PrismaIcon.astro'
import DatabaseIcon from '../components/icons/technologies/DatabaseIcon.astro'
import ReactIcon from '../components/icons/technologies/ReactIcon.astro'
import AstroIcon from '../components/icons/technologies/AstroIcon.astro'
import AngularIcon from '../components/icons/technologies/AngularIcon.astro'
import CssIcon from '../components/icons/technologies/CssIcon.astro'
import MongoDBIcon from '../components/icons/technologies/MongoDBIcon.astro'
import ExpressIcon from '../components/icons/technologies/ExpressIcon.astro'

// Projects Data
export default [
	{
		title: {
			es: "GlitchLink",
			en: "GlitchLink"
		},
		description: {
			es: "Una red social para gamers, en la que tener tu lista de juegos favoritos y agregar a gente para jugar juntos.",
			en: "A social network for gamers, where you can have your list of favorite games and add people to play together."
		},
		technologies: [
			{
				name: "NextJS",
				icon: NextJSIcon,
			},
			{
				name: "React",
				icon: ReactIcon,
			},
			{
				name: "Tailwind",
				icon: TailwindIcon,
			},
			{
				name: "Shadcn",
				icon: ShadcnIcon,
			},
			{
				name: "NextAuth",
				icon: NextAuthIcon
			},
			{
				name: "Prisma",
				icon: PrismaIcon
			},
			{
				name: "PostgreSQL",
				icon: DatabaseIcon
			}
		],
		link: "https://glitchlink.vercel.app",
		github: "https://github.com/KazzK94/glitchlink",
		image: "/images/projects/glitchlink.webp"
	},
	{
		title: {
			es: "Study Decks",
			en: "Study Decks"
		},
		description: {
			es: "Una aplicación muy sencilla para crear tus propias tarjetas de estudio y repasar de manera fácil y entretenida.",
			en: "A very simple application to create your own study cards and review them in an easy and entertaining way."
		},
		technologies: [
			{
				name: "React",
				icon: ReactIcon,
			},
			{
				name: "Tailwind",
				icon: TailwindIcon,
			},
			{
				name: "Local Storage",
				icon: DatabaseIcon
			}
		],
		link: "https://cardstudy.netlify.app/",
		github: "https://github.com/KazzK94/study-cards",
		image: "/images/projects/studydecks.webp"
	},
	{
		title: {
			es: "Acortador de URLs (en proceso)",
			en: "Link Shortener (WIP)"
		},
		description: {
			es: "Un acortador de URLs muy simple. Este proyecto es el Front-End, la lógica para acortar la URL y guardar la información y las visitas está en el back-end indicado en el archivo README.md del repositorio de GitHub.",
			en: "A URL shortener that is very simple. This project is the Front-End, the logic to shorten the URL and save the information and visits is in the back-end indicated in the README.md file in the GitHub repository."
		},
		technologies: [
			{
				name: "Angular 19",
				icon: AngularIcon
			},
			{
				name: "CSS",
				icon: CssIcon
			},
			{
				name: "Express",
				icon: ExpressIcon
			},
			{
				name: "MongoDB",
				icon: MongoDBIcon
			}
		],
		link: "https://smolerurl.netlify.app/",
		github: "https://github.com/KazzK94/url-shortener-client",
		image: "/images/projects/urlshortener.webp"
	}
]