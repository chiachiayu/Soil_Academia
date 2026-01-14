// Netlify Function: increments and returns total visits using Netlify Blobs.
import { getStore } from '@netlify/blobs'

const store = getStore('visits')
const key = 'total'

export default async function handler(event) {
	if (event.httpMethod === 'OPTIONS') {
		return {
			statusCode: 204,
			headers: corsHeaders(),
		}
	}

	try {
		const current = await store.get(key)
		const count = (parseInt(current, 10) || 0) + 1
		await store.set(key, String(count))

		return json({ value: count })
	} catch (err) {
		return json({ error: 'failed' }, 500)
	}
}

const corsHeaders = () => ({
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
})

const json = (data, statusCode = 200) => ({
	statusCode,
	headers: {
		'Content-Type': 'application/json',
		...corsHeaders(),
	},
	body: JSON.stringify(data),
})
