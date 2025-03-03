import NextJSIcon from '../components/icons/technologies/NextJSIcon.astro'
import TailwindIcon from '../components/icons/technologies/TailwindIcon.astro'
import ShadcnIcon from '../components/icons/technologies/ShadcnIcon.astro'
import NextAuthIcon from '../components/icons/technologies/NextAuthIcon.astro'
import PrismaIcon from '../components/icons/technologies/PrismaIcon.astro'
import DatabaseIcon from '../components/icons/technologies/DatabaseIcon.astro'
import ReactIcon from '../components/icons/technologies/ReactIcon.astro'
import AngularIcon from '../components/icons/technologies/AngularIcon.astro'
import CssIcon from '../components/icons/technologies/CssIcon.astro'
import MongoDBIcon from '../components/icons/technologies/MongoDBIcon.astro'
import ExpressIcon from '../components/icons/technologies/ExpressIcon.astro'
import TypeScriptIcon from '../components/icons/technologies/TypeScriptIcon.astro'

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
				name: "TypeScript",
				icon: TypeScriptIcon
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
			es: "Acortador de URLs",
			en: "Link Shortener"
		},
		description: {
			es: "El frontend de un acortador de URLs muy simple. Para ver el backend, clica en el enlace que hay en el archivo README.md del repositorio de GitHub.",
			en: "The frontend for a very simple URL shortener. To see the backend, please click on the link in the README.md file of the GitHub repository."
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