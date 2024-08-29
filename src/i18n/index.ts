
import en from './en.json'
import es from './es.json'

export function getI18n({ currentLocale = 'es' }: { currentLocale: string | undefined }) {
	if (currentLocale === 'en') return en
	return es
}
