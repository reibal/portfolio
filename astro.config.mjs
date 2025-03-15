import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind"
import netlify from "@astrojs/netlify"

export default defineConfig({
	site: "https://reibal.dev",
	integrations: [tailwind()],
	adapter: netlify(),
	output: "static",
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
		}
	},
})