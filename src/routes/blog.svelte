<script context="module">
</script>

<script>
	export let blogs;
</script>

<section>Hero</section>
<section>Search</section>
<section>
	Blog List

	{#each blogs as blog (blog.id)}
		<a href={`/blogs/${blog.id}`}>
			<div>
				{blog.title}<br />
				{blog.author}<br />
			</div>
		</a>
		<br />
	{/each}
</section>
<section>Info</section>
