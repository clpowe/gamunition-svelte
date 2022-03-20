<script context="module">
</script>

<script>
	import BlogHero from '../components/BlogHero.svelte';
	export let blogs;
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
		{#each blogs as blog (blog.id)}
			<a href={`/blogs/${blog.id}`} class="h-full w-full">
				<div class="relative text-light " id="blogPost">
					<img src={blog.image} class="w-full mb-3" />
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
	</div>
</section>

<style>
</style>
