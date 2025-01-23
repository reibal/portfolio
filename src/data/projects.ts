import NextJSIcon from '../components/icons/technologies/NextJSIcon.astro'
import TailwindIcon from '../components/icons/technologies/TailwindIcon.astro'
import ShadcnIcon from '../components/icons/technologies/ShadcnIcon.astro'
import NextAuthIcon from '../components/icons/technologies/NextAuthIcon.astro'
import PrismaIcon from '../components/icons/technologies/PrismaIcon.astro'
import DatabaseIcon from '../components/icons/technologies/DatabaseIcon.astro'
import ReactIcon from '../components/icons/technologies/ReactIcon.astro'
import AstroIcon from '../components/icons/technologies/AstroIcon.astro'

// Projects Data
export default [
	{
		title: {
			es: "GlitchLink",
			en: "GlitchLink",
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
		image: "/images/projects/glitchlink-plain.avif",
	}
]