import Airtable from 'airtable';

Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	// @ts-ignore
	apiKey:
		process.env.VITE_VERCEL_ENV === 'production'
			? process.env.VITE_APIKEY
			: import.meta.env.VITE_APIKEY
});

var base = Airtable.base('app24nIoWe3Q49B6u');

const getRecords = async (_base) => {
	let array = [];
	try {
		const res = base(_base)
			.select({
				maxRecords: 3,
				view: 'Grid view'
			})
			.all();

		(await res).forEach((item) => {
			array.push({ ...item.fields, id: item.id });
		});

		return array;
	} catch (error) {
		console.log(1, error);
	}
};

export async function get({ params }) {
	const data = await getRecords(params.base);

	return {
		body: {
			data: data
		}
	};
}
