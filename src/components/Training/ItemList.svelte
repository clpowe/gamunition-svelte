<script>
	export let base;
	import LongCard from '../LongCard.svelte';
	import LoadingSpinner from '$lib/loadingSpinner.svelte';

	const record = (async () => {
		const res = await fetch(`/api/${base}`);
		const data = await res.json();
		return data;
	})();
</script>

<div>
	{#await record}
		<LoadingSpinner color="yellow" />
	{:then section}
		<div class="max-w-xl mx-auto space-y-5 ">
			{#each section.data as item (item.id)}
				<LongCard {item} />
			{/each}
		</div>
	{:catch error}
		<div>{error.message}</div>
	{/await}
</div>
