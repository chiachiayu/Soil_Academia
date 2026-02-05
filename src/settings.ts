export const profile = {
	fullName: 'Chia-Yu Yang',
    title_name: '', // e.g., Dr., Prof., etc.
	title: 'Postdoctoral Researcher',
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
	linkedin: 'https://www.linkedin.com/in/chia-yu-yang-tw/',
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
	lightTheme: 'winter', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'night', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const homepage = {
	featuredVideo: {
		title: 'Recent Research Highlight',
		description:
			'See how we conducted our enhanced rock weathering study in the paddy field last summer.',
		// Replace with your own YouTube embed URL or other video provider embed link
		embedUrl: 'https://www.youtube.com/embed/zp-G67_kckI?si=Dmgy8w_OC9zmLWLt',
	},
}

export const seo = {
	default_title: 'Chia-Yu Yang - Soil Science',
	default_description: 'Chia-Yu Yang\'s academic portfolio showcasing research in soil science and environmental geochemistry.',
	default_image: '/images/webicon.png',
}
