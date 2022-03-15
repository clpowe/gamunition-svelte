<script>
	export let base;
	import LongCard from '../LongCard.svelte';

	const record = (async () => {
		try {
			const res = await fetch(`http://localhost:3000/api/${base}`);
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
