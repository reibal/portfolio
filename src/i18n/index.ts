
import en from './en.json'
import es from './es.json'

const locales = {
	'en': en,
	'es': es
}
type Locale = typeof locales

const defaultLocaleKey = 'es'

export function getI18n({ currentLocale }: { currentLocale: string | undefined }) {
	// If currentLocale is a key of locales, return the corresponding locale
	if (currentLocale && currentLocale in locales) {
		return locales[currentLocale as keyof Locale]
	}
	return locales[defaultLocaleKey]
}
