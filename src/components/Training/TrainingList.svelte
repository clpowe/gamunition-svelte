<script>
	export let base;
	import Card from '../Card.svelte';
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
			const res = await fetch(`/api/${base}`);
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error.message);
		}
	})();
</script>

<div>
	<div class="flex flex-col mx-auto items-center md:flex-row md:justify-center">
		{#await record}
			<p>...waiting</p>
		{:then section}
			{#each section.data as training (training.id)}
				<Card {training} />
			{/each}
		{:catch error}
			<div>{error}</div>
		{/await}
	</div>
</div>
