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

export async function get({ params }) {
	// const FeatureSection = await getRecord(params.base, params.record);
	console.log(params.base);
	const data = await getRecords(params.base);
	// const RangeFees = await getRecords('Range Fees');
	// const InHomeTraining = await getRecords('InHomeTraining');
	// const inHomeAddOns = await getRecords('inHomeAddOns');
	// const PurchaseAndSell = await getRecords('PurchaseAndSell');
	// const WeaponCleaning = await getRecords('WeaponCleaning');
	// const Testimonials = await getRecords('Testimonials');

	return {
		body: {
			// FeatureSection: FeatureSection
			data: data
			// RangeFees: RangeFees,
			// InHomeTraining: InHomeTraining,
			// inHomeAddOns: inHomeAddOns,
			// PurchaseAndSell: PurchaseAndSell,
			// WeaponCleaning: WeaponCleaning,
			// Testimonials: Testimonials
		}
	};
}
