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
		title: 'Newest Research activity',
		description:
			'Last week (2/10-2/13), we have started our enhanced rock weathering study in the paddy field in Taichung, Taiwan.',
		videoSrc: '/videos/TARI_ERW_short.mp4', // Put the MP4 in public/videos/
		poster: '/images/field/paddy-erw-tari.png', // Optional poster shown before playback
		activities: [
			'2026 Spring: Enhanced rock weathering field trial in Taichung, Taiwan.',
			'International collaboration between Kyoto Prefectural University (KPU), Taiwan Agricultural Research Institute (TARI) and National Chung Hsing University (NCHU).',
		],
	},
}

export const researchPage = {
	highlight: {
		title: 'Current Project Highlight',
		description: 'Demonstration of enhanced rock weathering field trials and academic activity log.',
		videoSrc: '/videos/Yosanocho-2025-summer_sb.mp4',
		poster: '/images/field/paddy-erw-yosano.png',
	},
}

export const seo = {
	default_title: 'Chia-Yu Yang - Soil Science',
	default_description: 'Chia-Yu Yang\'s academic portfolio showcasing research in soil science and environmental geochemistry.',
	default_image: '/images/webicon.png',
}
