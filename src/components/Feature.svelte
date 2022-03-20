<script>
	import LoadingSpinner from '$lib/loadingSpinner.svelte';
	import { URL } from '$lib/Env';

	let myURL;

	if (process.env.NODE_ENV === 'production') {
		// For production
		myURL = process.env.MY_API_KEY;
	} else {
		// For development
		myURL = URL;
	}

	const record = (async () => {
		try {
			const res = await fetch(`/api/FeatureSection/receeyP2JaINsow5a`);
			const data = await res.json();

			return data;
		} catch (error) {
			console.log(error.message);
		}
	})();
</script>

<section class="py-40 font-oswald bg-yellow">
	<div class="text-center max-w-3xl m-auto px-4">
		{#await record}
			<LoadingSpinner color="gun-black" />
		{:then section}
			<h2 class="text-lg mb-3 md:(text-xl mb-5) leading-none ">
				{section.record.data.subhead}
			</h2>
			<h3 class="text-xl md:(text-2xl) leading-none">{section.record.data.head}</h3>
			<p class="font-lato text-base leading-5 mt-3 md:(text-lg leading-9 mt-5) ">
				{section.record.data.text}
			</p>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</section>
