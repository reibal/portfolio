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
			es: "Una red social para gamers. Desarrollada con NextJS y TailwindCSS, y con la autenticación de NextAuth.",
			en: "A social network for gamers. Developed with NextJS and TailwindCSS, and with NextAuth for authentication.",
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
	},
	{
		title: {
			es: "Portafolio de dibujo",
			en: "Drawing Portfolio",
		},
		description: {
			es: "El portafolio de Haru Blue, una artista digital. La página se ha creado con Astro y TailwindCSS.",
			en: "The drawing portfolio of the digital artist Haru Blue. Site created with Astro and TailwindCSS.",
		},
		technologies: [
			{
				name: "Astro",
				icon: AstroIcon,
			},
			{
				name: "Tailwind",
				icon: TailwindIcon,
			},
		],
		link: "https://harublue.netlify.app/",
		github: "https://github.com/KazzK94/haru-portfolio",
		image: "/images/projects/harublue-portfolio-plain.avif",
	},
]