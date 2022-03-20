<script>
	export let base;
	import Card from '../Card.svelte';
	import LoadingSpinner from '$lib/loadingSpinner.svelte';

	const record = (async () => {
		const res = await fetch(`/api/${base}`);
		const data = await res.json();
		return data;
	})();
</script>

<div>
	<div class="flex flex-col mx-auto items-center md:flex-row md:justify-center">
		{#await record}
			<LoadingSpinner color="yellow" />
		{:then section}
			{#each section.data as training (training.id)}
				<Card {training} />
			{/each}
		{:catch error}
			<div>{error.message}</div>
		{/await}
	</div>
</div>
