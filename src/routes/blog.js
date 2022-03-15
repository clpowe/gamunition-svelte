import Airtable from 'airtable';

Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	apiKey: 'keyjXkmALVHr1yPDD'
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

export async function get() {
	const blogs = await getRecords('blog');

	return {
		body: {
			blogs: blogs
		}
	};
}
