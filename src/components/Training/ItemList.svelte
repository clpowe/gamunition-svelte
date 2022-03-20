<script>
	export let base;
	import LongCard from '../LongCard.svelte';
	import { URL } from '$lib/Env';

	let myURL;

	if (process.env.NODE_ENV === 'production') {
		// For production
		myURL = process.env.VERCEL_URL;
	} else {
		// For development
		myURL = URL;
	}

	const record = (async () => {
		try {
			const res = await fetch(`${myURL}api/${base}`);
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error.message);
		}
	})();
</script>

<div>
	{#await record}
		<p>...waiting</p>
	{:then section}
		<div class="max-w-xl mx-auto space-y-5 ">
			{#each section.data as item (item.id)}
				<LongCard {item} />
			{/each}
		</div>
	{:catch error}
		<div>{error}</div>
	{/await}
</div>
