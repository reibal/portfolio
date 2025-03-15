import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind"

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
	site: "https://reibal.dev",
	integrations: [tailwind()],
	adapter: netlify(),
	output: "server",
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
		domains: {
			"es": "https://reibal.dev",
			"en": "https://en.reibal.dev"
		}
	},
})