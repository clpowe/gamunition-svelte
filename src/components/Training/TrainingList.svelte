<script>
	import Card from '../Card.svelte';
	import LoadingSpinner from '$lib/loadingSpinner.svelte';
	// @ts-ignore
	import { dev } from '$app/env';
	export let atrecord;

	// @ts-ignore
	const KEY = dev ? import.meta.env.VITE_APIKEY : process.env.VITE_APIKEY;

	const url = `https://api.airtable.com/v0/app24nIoWe3Q49B6u/${atrecord}?api_key=${KEY}`;

	const getTrainings = async () => {
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

	const trainings = getTrainings();
</script>

<div>
	<div class="flex flex-col mx-auto items-center md:flex-row md:justify-center">
		{#await trainings}
			<LoadingSpinner color="yellow" />
		{:then items}
			{#each items as training (training.id)}
				<Card {training} />
			{/each}
		{:catch error}
			<p>Something went wrong: {error.message}</p>
		{/await}
	</div>
</div>
