import Airtable from 'airtable';

// import { MY_API_KEY } from '$lib/Env';

// let myApiKey;

// if (process.env.NODE_ENV === 'production') {
// 	// For production
// 	myApiKey = process.env.MY_API_KEY;
// } else {
// 	// For development
// 	myApiKey = MY_API_KEY;
// }

Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	// @ts-ignore
	apiKey: import.meta.env.VITE_APIKEY
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
		console.log(error);
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
