import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string{
	const author = authors.split(', ')
	if (author.includes(profile.author_name)){
		return authors.replace(profile.author_name, `<span class='font-medium underline'>${profile.author_name}</span>`)
	}
	return authors
}

export function trimExcerpt(excerpt?: string | null): string {
	const safe = excerpt ?? ''
	const excerptLength = template.excerptLength
	return safe.length > excerptLength ? `${safe.substring(0, excerptLength)}...` : safe
}
