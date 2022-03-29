<script>
	export let base;
	import LongCard from '../LongCard.svelte';
	import LoadingSpinner from '$lib/loadingSpinner.svelte';

	// @ts-ignore
	import { dev } from '$app/env';

	// @ts-ignore
	const KEY = dev ? import.meta.env.VITE_APIKEY : process.env.VITE_APIKEY;

	const url = `https://api.airtable.com/v0/appq9rVNBW9qLegHl/${base}?api_key=${KEY}`;

	const getItems = async () => {
		let array = [];
		try {
			const response = await fetch(url);
			const data = await response.json();
			data.records.forEach((item) => {
				array.push({ ...item.fields, id: item.id });
			});
			return array;
		} catch (error) {
			console.log(error);
		}
	};

	const response = getItems();
</script>

<div>
	{#await response}
		<LoadingSpinner color="yellow" />
	{:then items}
		<div class="max-w-xl mx-auto space-y-5 ">
			{#each items as item (item.id)}
				<LongCard {item} />
			{/each}
		</div>
	{:catch error}
		<div>{error.message}</div>
	{/await}
</div>
