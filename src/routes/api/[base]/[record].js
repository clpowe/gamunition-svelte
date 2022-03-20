import Airtable from 'airtable';

Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	// @ts-ignore
	apiKey: import.meta.env.VITE_APIKEY
});

var base = Airtable.base('app24nIoWe3Q49B6u');

const getRecord = async (_base, recordId) => {
	const record = await base(_base).find(recordId);

	const minifyRecord = (record) => {
		return {
			id: record.id,
			data: record._rawJson.fields
		};
	};

	return minifyRecord(record);
};

export async function get({ params }) {
	const record = await getRecord(params.base, params.record);

	return {
		body: {
			record: record
		}
	};
}
