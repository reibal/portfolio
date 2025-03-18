import NextJSIcon from '../components/icons/technologies/NextJSIcon.astro'
import TailwindIcon from '../components/icons/technologies/TailwindIcon.astro'
import ShadcnIcon from '../components/icons/technologies/ShadcnIcon.astro'
import NextAuthIcon from '../components/icons/technologies/NextAuthIcon.astro'
import PrismaIcon from '../components/icons/technologies/PrismaIcon.astro'
import DatabaseIcon from '../components/icons/technologies/DatabaseIcon.astro'
import ReactIcon from '../components/icons/technologies/ReactIcon.astro'
import CssIcon from '../components/icons/technologies/CssIcon.astro'
import MongoDBIcon from '../components/icons/technologies/MongoDBIcon.astro'
import ExpressIcon from '../components/icons/technologies/ExpressIcon.astro'
import TypeScriptIcon from '../components/icons/technologies/TypeScriptIcon.astro'
import AstroIcon from '../components/icons/technologies/AstroIcon.astro'
import ClerkIcon from '../components/icons/technologies/ClerkIcon.astro'

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
		link: "https://glitchlink.reibal.dev",
		github: "https://github.com/KazzK94/glitchlink",
		image: "/images/projects/glitchlink.webp"
	},
	{
		title: {
			es: "SMOL (en desarrollo)",
			en: "SMOL (work in progress)"
		},
		description: {
			es: "Un acortador de URLs con rastreo de visitas. La lógica está separada en Front-End (con Astro) y Back-End (con NodeJS + Express).",
			en: "A URL shortener that also tracks visits. The logic is separated into the Front-End (with Astro) and the Back-End (with NodeJS + Express)."
		},
		technologies: [
			{
				name: "Astro",
				icon: AstroIcon
			},
			{
				name: "CSS",
				icon: CssIcon
			},
			{
				name: "TypeScript",
				icon: TypeScriptIcon
			},
			{
				name: "Express",
				icon: ExpressIcon
			},
			{
				name: "MongoDB",
				icon: MongoDBIcon
			},
			{
				name: "Clerk",
				icon: ClerkIcon
			}
		],
		link: "https://smol.reibal.dev/",
		github: "https://github.com/KazzK94/url-shortener-client",
		image: "/images/projects/urlshortener.webp"
	}
]