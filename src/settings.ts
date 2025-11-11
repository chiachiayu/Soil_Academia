export const profile = {
	fullName: 'Chia-Yu Yang',
	title: 'PhD',
	institute: 'Kyoto Prefectural University',
	author_name: 'Yang,C.Y.', // Author name to be highlighted in the papers section
	research_areas: [ { title: 'Pedology', description: 'Soil morphology and classification', field: 'soil chemistry' },
		{ title: 'Geochemistry', description: 'Elemental fractionation and chemical speciation', field: 'soil chemistry' },
		{ title: 'Magnetism', description: 'Mineral magnetism and magnetic properties of soils', field: 'soil chemistry' }
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'cyyang@kpu.ac.jp',
	linkedin: '',
	x: 'https://www.x.com/ellencyyang',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0001-8150-2309',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Dr. Chia-Yu Yang - Academic Portfolio',
	default_description: 'Dr. Chia-Yu Yang\'s academic portfolio showcasing research in soil science and environmental geochemistry.',
	default_image: '/images/astro-academia.png',
}
