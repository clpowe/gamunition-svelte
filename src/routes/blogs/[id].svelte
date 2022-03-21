<script context="module">
	// @ts-ignore
	import { dev } from '$app/env';
	// @ts-ignore
	const KEY = dev ? import.meta.env.VITE_APIKEY : process.env.VITE_APIKEY;

	export async function load({ fetch, params }) {
		const url = `https://api.airtable.com/v0/app24nIoWe3Q49B6u/blog/${params.id}?api_key=${KEY}`;
		const response = await fetch(url);
		const data = await response.json();

		return {
			// status: response.status,
			props: {
				blog: response.ok && (await { ...data.fields, posted: data.createdTime, id: data.id })
			}
		};
	}
</script>

<script>
	import { marked } from 'marked';
	export let blog;
	const body = marked.parse(blog.body);
</script>

<svelte:head>
	<title>Gammunition Arms and Training | {blog.title}</title>
</svelte:head>

<div class="h-lg bg-center bg-cover mb-10" style="background-image: url('{blog.image}')" />

<section class="mycontainer">
	<article
		id="content"
		class="prose mx-auto prose-slate text-light font-lato font-light tracking-wide"
	>
		<div class="text-sm font-lato uppercase mb-3">
			{blog.topic} | {new Date(blog.publishdate).toLocaleDateString('en-gb', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</div>
		<h1 class="text-light title leading-none">{blog.title}</h1>
		<div>
			Written by: {blog.author}
		</div>
		{@html body}
	</article>
</section>

<style>
	.title {
		color: rgb(254, 254, 254);
	}
</style>
