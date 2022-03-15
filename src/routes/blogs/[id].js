import Airtable from 'airtable';
import { marked } from 'marked';

Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	apiKey: 'keyjXkmALVHr1yPDD'
});

var base = Airtable.base('app24nIoWe3Q49B6u');

const getRecord = async (_base, recordId) => {
	const record = await base(_base).find(recordId);

	const minifyRecord = (record) => {
		return {
			id: record.id,
			...record.fields
		};
	};

	return minifyRecord(record);
};

export async function get({ params }) {
	const blog = await getRecord('blog', params.id);
	const body = marked.parse(blog.body);
	return {
		body: {
			blog: blog,
			body: body
		}
	};
}
