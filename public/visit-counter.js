(function () {
	const scriptEl = document.currentScript
	const endpoint = scriptEl?.dataset?.endpoint
	const container = document.getElementById('visit-counter')
	const countTarget = container?.querySelector('[data-count]')

	if (!endpoint || !countTarget) return

	const updateCount = value => {
		countTarget.textContent =
			typeof value === 'number' ? value.toLocaleString() : '--'
	}

	fetch(endpoint, { cache: 'no-store', mode: 'cors' })
		.then(res => res.json())
		.then(data => updateCount(data?.value))
		.catch(() => updateCount(null))
})()
