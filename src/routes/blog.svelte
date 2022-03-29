<script context="module">
	// @ts-ignore
	import { dev } from '$app/env';
	// @ts-ignore
	const KEY = dev ? import.meta.env.VITE_APIKEY : process.env.VITE_APIKEY;
	export async function load({ fetch }) {
		let array = [];
		const url = `https://api.airtable.com/v0/appq9rVNBW9qLegHl/blog?api_key=${KEY}`;
		const response = await fetch(url);
		const data = await response.json();

		data.records.forEach((item) => {
			array.push({ ...item.fields, id: item.id });
		});
		return {
			status: response.status,
			props: {
				articles: response.ok && array
			}
		};
	}
</script>

<script>
	import LoadingSpinner from '$lib/loadingSpinner.svelte';
	import BlogHero from '../components/BlogHero.svelte';
	export let articles;

	let search = '';

	const filterPost = () => {
		const filterValue = search.toLocaleLowerCase();
		const bs = document.querySelectorAll('#blogPost').forEach((post) => {
			// @ts-ignore
			post.innerText.toLowerCase().indexOf(filterValue) > -1
				? // @ts-ignore
				  (post.style.display = '')
				: // @ts-ignore
				  (post.style.display = 'none');
		});
	};
</script>

<BlogHero />
<div class="mycontainer">
	<div class="form-group max-w-md mx-auto my-20">
		<input
			bind:value={search}
			on:keyup={filterPost}
			type="text"
			name="name"
			class="form-control w-full h-12 p-4 ring-yellow"
			placeholder="Search"
		/>
	</div>
</div>
<section class="mb-10">
	<div class="mycontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
		{#await articles}
			<LoadingSpinner color="gun-black" />
		{:then section}
			{#each articles as blog (blog.id)}
				<a href={`/blogs/${blog.id}`} class="h-full w-full" id="blogPost">
					<div class="relative text-light ">
						<img src={blog.image} class="w-full mb-3" alt="beautiful" />
						<div class="text-sm font-lato uppercase mb-3">
							{blog.topic} | {new Date(blog.publishdate).toLocaleDateString('en-gb', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</div>
						<h2 class="text-lg leading-tight">{blog.title}</h2>
						<h3 class="text-light mb-3">{blog.author}</h3>
						<p class="text-base text-light-grey font-lato font-light">{blog.description}</p>
						<p hidden>{blog.body}</p>
					</div>
				</a>
			{/each}
		{:catch error}
			<div>{error.message}</div>
		{/await}
	</div>
</section>

<style>
</style>
