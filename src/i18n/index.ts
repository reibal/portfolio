
import en from './en.json'
import es from './es.json'

const locales = {
	'en': en,
	'es': es
}
type Locales = typeof locales

const defaultLocaleKey = 'es'

export function getI18n({ currentLocale = 'es' }: { currentLocale: keyof Locales | undefined }) {
	return locales[currentLocale || defaultLocaleKey] || locales[defaultLocaleKey]
}
