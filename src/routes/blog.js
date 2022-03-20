import Airtable from 'airtable';

// const p = process.env.NODE_ENV === 'production' ? process.env : import.meta.env;

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
	apiKey:
		process.env.NODE_ENV === 'production' ? process.env.VITE_APIKEY : import.meta.env.VITE_APIKEY
});

var base = Airtable.base('app24nIoWe3Q49B6u');

const getRecords = async (_base) => {
	let array = [];
	try {
		const res = base(_base)
			.select({
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

export async function get() {
	const blogs = await getRecords('blog');

	return {
		body: {
			blogs: blogs
		}
	};
}
